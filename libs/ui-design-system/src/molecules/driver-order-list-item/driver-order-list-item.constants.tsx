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
  byCourier: <DeliveryOptionWalkIcon />,
  byScooter: <DeliveryOptionMotoIcon />,
  byCar: <DeliveryOptionCarIcon />,
  byTruck: <DeliveryOptionTruckIcon />,
};
