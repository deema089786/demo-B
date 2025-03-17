import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

const isPlacesService = (
  data: unknown,
): data is google.maps.places.PlacesService => {
  if (!data) return false;
  return data instanceof google.maps.places.PlacesService;
};

export const useSearchPlaces = () => {
  const {
    isLoading,
    data: autocompleteService,
    error,
  } = useQuery({
    queryKey: ['google-maps-places-lib'],
    queryFn: async () => {
      const { AutocompleteService, Place } = (await google.maps.importLibrary(
        'places',
      )) as unknown as google.maps.PlacesLibrary;

      return new AutocompleteService();
    },
  });

  const getPlaceInfo = useCallback(async (params: { placeId: string }) => {
    const { Place } = (await google.maps.importLibrary(
      'places',
    )) as unknown as google.maps.PlacesLibrary;
    const place = new Place({ id: params.placeId });
    console.log(place);
    await place.fetchFields({
      fields: ['displayName', 'formattedAddress', 'location'],
    });

    console.log(place);
    return place;
  }, []);

  return useCallback(
    async (
      val: string,
    ): Promise<
      {
        addressPrimary: string;
        addressSecondary: string;
        placeId: string;
        getPlaceInfo: () => Promise<google.maps.Place>;
      }[]
    > => {
      if (!autocompleteService) return [];
      const { predictions } = await autocompleteService.getPlacePredictions({
        input: val,
      });
      console.log(predictions);
      return predictions.map((result) => ({
        placeId: result.place_id,
        addressPrimary: result.structured_formatting.main_text,
        addressSecondary: result.structured_formatting.secondary_text,
        getPlaceInfo: () => getPlaceInfo({ placeId: result.place_id }),
      }));
    },
    [autocompleteService, getPlaceInfo],
  );
};
