import React from 'react';
import { Stack } from '@mui/material';
import { DriverOrder } from '@demo-b/data-orders';

import { ScreenLayout } from '../../layout';
import { DriverOrderListItem } from '../../molecules/driver-order-list-item';
import { ListLoader } from '../../molecules';

export type HomeScreenDriverProps = {
  orders: DriverOrder[];
  isLoading?: boolean;
};

export const HomeScreenDriver: React.FC<HomeScreenDriverProps> = (props) => {
  const { orders, isLoading } = props;

  if (isLoading) {
    return (
      <ScreenLayout>
        <ListLoader itemCount={2} itemHeightPx={150} />
      </ScreenLayout>
    );
  }

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
