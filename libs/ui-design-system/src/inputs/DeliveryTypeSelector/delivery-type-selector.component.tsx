import React from 'react';
import { Stack } from '@mui/material';

import { DeliveryOptionCard } from '../../atoms';
import {
  DeliveryOptionCarIcon,
  DeliveryOptionMotoIcon,
  DeliveryOptionTruckIcon,
  DeliveryOptionWalkIcon,
} from '../../icons';

export type DeliveryTypeSelectorProps = {
  value: 'byCourier' | 'byScooter' | 'byCar' | 'byTruck';
  onChange?(value: 'byCourier' | 'byScooter' | 'byCar' | 'byTruck'): void;
};

export const DeliveryTypeSelector: React.FC<DeliveryTypeSelectorProps> = (
  props,
) => {
  const { value, onChange } = props;

  return (
    <Stack direction="row" spacing={1} overflow="auto" mx={-2} px={2}>
      <DeliveryOptionCard
        selected={value === 'byCourier'}
        onClick={() => onChange?.('byCourier')}
        color="#e2dcff"
        title="From $8.99"
        subTitle="by Courier"
        icon={<DeliveryOptionWalkIcon />}
      />
      <DeliveryOptionCard
        selected={value === 'byScooter'}
        onClick={() => onChange?.('byScooter')}
        color="#e2dcff"
        title="From $19.99"
        subTitle="by Scooter driver"
        icon={<DeliveryOptionMotoIcon />}
      />
      <DeliveryOptionCard
        selected={value === 'byCar'}
        onClick={() => onChange?.('byCar')}
        color="#e2dcff"
        title="From $25.99"
        subTitle="by Car driver"
        icon={<DeliveryOptionCarIcon />}
      />
      <DeliveryOptionCard
        selected={value === 'byTruck'}
        onClick={() => onChange?.('byTruck')}
        color="#e2dcff"
        title="From $35.99"
        subTitle="by Truck driver"
        icon={<DeliveryOptionTruckIcon />}
      />
    </Stack>
  );
};
