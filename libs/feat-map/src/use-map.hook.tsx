import { MutableRefObject } from 'react';
import { GoogleMap } from '@capacitor/google-maps';
import { useQuery } from '@tanstack/react-query';

export const useMap = (params: {
  ref: MutableRefObject<HTMLElement | undefined>;
}) => {
  const { data: map, isLoading } = useQuery({
    queryKey: ['google-map'],
    queryFn: async () => {
      if (!params.ref.current) return null;
      const map = await GoogleMap.create({
        id: 'my-cool-map',
        element: params.ref.current,
        // @ts-expect-error apiKey: process.env.REACT_APP_YOUR_API_KEY_HERE,
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
        config: {
          disableDefaultUI: true,
          center: {
            lat: 49.84201574773409,
            lng: 24.028486734271034,
          },
          zoom: 15,
        },
      });
      // temp solution

      return map;
    },
  });

  return { map, isLoading };
};
