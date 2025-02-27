import React from 'react';
import { Stack } from '@mui/material';

import { ScreenLayout } from '../../layout';
import { DriverOrderListItem } from '../../molecules/driver-order-list-item';

export type HomeScreenDriverProps = {
  orders: {
    id: string;
    price: number;
    route: {
      timeTotalMin: number;
      distanceTotalKm: number;
      from: {
        address: string;
        timeMin: number;
        distanceKm: number;
      };
      to: {
        address: string;
        timeMin: number;
        distanceKm: number;
      };
    };
  }[];
};

export const HomeScreenDriver: React.FC<HomeScreenDriverProps> = (props) => {
  const { orders } = props;
  return (
    <ScreenLayout>
      <Stack spacing={1}>
        {orders.map((order) => (
          <DriverOrderListItem
            key={order.id}
            price={order.price}
            route={order.route}
          />
        ))}
      </Stack>
    </ScreenLayout>
  );
};
