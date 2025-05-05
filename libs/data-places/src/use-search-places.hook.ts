import { useQuery } from '@tanstack/react-query';
import { useCallback } from 'react';

import { PlaceSearchItem } from './places.types';

export const useSearchPlaces = () => {
  const { data: autocompleteService } = useQuery({
    queryKey: ['google-maps-places-lib'],
    queryFn: async () => {
      const { AutocompleteService } = (await google.maps.importLibrary(
        'places',
      )) as unknown as google.maps.PlacesLibrary;

      return new AutocompleteService();
    },
  });

  return useCallback(
    async (val: string): Promise<PlaceSearchItem[]> => {
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
      }));
    },
    [autocompleteService],
  );
};
