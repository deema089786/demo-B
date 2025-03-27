import { z } from 'zod';
import { PlaceSchema } from '@demo-b/data-places';

export const placeOrderSchema = z.object({
  deliveryType: z.enum(['byCourier', 'byScooter', 'byCar', 'byTruck']),
  locationFrom: PlaceSchema,
  locationTo: PlaceSchema,
});

export type PlaceOrder = z.infer<typeof placeOrderSchema>;
