import { useQuery } from '@tanstack/react-query';
import { Geolocation } from '@capacitor/geolocation';

import { loadPlaceByPlaceId } from './places.utils';

export const useCurrentLocation = () => {
  const { data: permissions } = useQuery({
    queryKey: ['location-permissions'],
    queryFn: async () => {
      let permissions = await Geolocation.checkPermissions();
      if (permissions.coarseLocation === 'prompt') {
        permissions = await Geolocation.requestPermissions({
          permissions: ['coarseLocation', 'location'],
        });
      }
      return permissions;
    },
  });

  const isPermissionGranted =
    permissions?.coarseLocation === 'granted' ||
    permissions?.location === 'granted';

  const { data: place, isLoading } = useQuery({
    queryKey: ['current-location', isPermissionGranted],
    queryFn: async () => {
      if (!isPermissionGranted) return null;
      const position = await Geolocation.getCurrentPosition();
      const Geocoding = (await google.maps.importLibrary(
        'geocoding',
      )) as unknown as google.maps.GeocodingLibrary;
      const geocoder = new Geocoding.Geocoder();

      const data = await geocoder.geocode({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });

      const place = await loadPlaceByPlaceId({
        placeId: data.results[0].place_id,
      });

      return place;
    },
  });

  return { place, isLoading };
};
