import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import { Place } from './places.types';

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
    await place.fetchFields({
      fields: ['displayName', 'formattedAddress', 'location'],
    });

    return place;
  }, []);

  return useCallback(
    async (val: string): Promise<Place[]> => {
      if (!autocompleteService) return [];
      const { predictions } = await autocompleteService.getPlacePredictions({
        input: val,
      });
      return predictions.map((result) => ({
        id: result.place_id,
        address: {
          primary: result.structured_formatting.main_text,
          secondary: result.structured_formatting.secondary_text,
        },
        displayName: result.description,
        getPlaceInfo: () => getPlaceInfo({ placeId: result.place_id }),
      }));
    },
    [autocompleteService, getPlaceInfo],
  );
};
