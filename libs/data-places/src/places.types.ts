import { z } from 'zod';

export const PlaceSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  address: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});

export type Place = z.infer<typeof PlaceSchema>;

export type PlaceSearchItem = Omit<Place, 'location'>;
