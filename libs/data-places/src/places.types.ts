import { z } from 'zod';

export const PlaceSchema = z.object({
  id: z.string(),
  displayName: z.string(),
  address: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
});

export type Place = z.infer<typeof PlaceSchema>;
