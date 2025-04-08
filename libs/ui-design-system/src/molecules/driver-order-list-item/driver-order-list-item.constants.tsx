import React from 'react';

import {
  DeliveryOptionCarIcon,
  DeliveryOptionMotoIcon,
  DeliveryOptionTruckIcon,
  DeliveryOptionWalkIcon,
} from '../../icons';

export const deliveryTypeIcon: Record<
  'byCourier' | 'byScooter' | 'byCar' | 'byTruck',
  React.ReactNode
> = {
  byCourier: <DeliveryOptionWalkIcon color="primary" />,
  byScooter: <DeliveryOptionMotoIcon color="primary" />,
  byCar: <DeliveryOptionCarIcon color="primary" />,
  byTruck: <DeliveryOptionTruckIcon color="primary" />,
};
