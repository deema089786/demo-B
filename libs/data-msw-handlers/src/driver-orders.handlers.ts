import { http, HttpResponse } from 'msw';
import { DriverOrder } from '@demo-b/data-orders';

export const driverOrdersSuccessHandler = http.get(
  'https://api.com/driver-orders',
  async () => {
    const data: DriverOrder[] = [
      {
        id: 'id1',
        createdAt: new Date(),
        customerId: 'customerId1',
        price: 77,
        deliveryType: 'byScooter',
        route: {
          timeTotalMin: 23,
          distanceTotalKm: 3.5,
          from: { address: 'Main street 55', timeMin: 8, distanceKm: 0.6 },
          to: {
            address: 'Main street 55 Old way home',
            timeMin: 15,
            distanceKm: 2.9,
          },
        },
      },
    ];
    return HttpResponse.json(data);
  },
);

export const allDriverOrdersHandlers = [driverOrdersSuccessHandler];
