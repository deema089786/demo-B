import { Place } from './places.types';

export const loadPlaceByPlaceId = async (params: {
  placeId: string;
}): Promise<Place> => {
  const { Place: GooglePlace } = (await google.maps.importLibrary(
    'places',
  )) as unknown as google.maps.PlacesLibrary;
  const data = new GooglePlace({ id: params.placeId });
  await data.fetchFields({
    fields: [
      'displayName',
      'formattedAddress',
      'addressComponents',
      'location',
    ],
  });
  const streetName = data.addressComponents?.find((address) =>
    address.types.includes('route'),
  )?.shortText;
  const streetNumber = data.addressComponents?.find((address) =>
    address.types.includes('street_number'),
  )?.shortText;
  const area3 = data.addressComponents?.find((address) =>
    address.types.includes('locality'),
  )?.shortText;
  const area2 = data.addressComponents?.find((address) =>
    address.types.includes('administrative_area_level_2'),
  )?.shortText;
  const area1 = data.addressComponents?.find((address) =>
    address.types.includes('administrative_area_level_1'),
  )?.shortText;

  const addressPrimary = [streetName, streetNumber, area3]
    .filter(Boolean)
    .join(', ');
  const addressSecondary = [area2, area1].filter(Boolean).join(', ');

  const place: Place = {
    id: data.id,
    address: {
      primary: addressPrimary,
      secondary: addressSecondary,
    },
    displayName: [addressPrimary, addressSecondary].filter(Boolean).join(', '),
    location: {
      latitude: data.location?.lat() ?? 0,
      longitude: data.location?.lng() ?? 0,
    },
  };

  return place;
};
