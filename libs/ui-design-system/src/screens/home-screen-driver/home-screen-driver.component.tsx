import React from 'react';
import { Stack } from '@mui/material';
import { DriverOrder } from '@demo-b/data-orders';

import { ScreenLayout } from '../../layout';
import { DriverOrderListItem } from '../../molecules/driver-order-list-item';

export type HomeScreenDriverProps = {
  orders: DriverOrder[];
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
            deliveryType={order.deliveryType}
            route={order.route}
          />
        ))}
      </Stack>
    </ScreenLayout>
  );
};
