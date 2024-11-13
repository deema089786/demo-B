import React from 'react';
import { Stack } from '@mui/material';

import { ScreenLayout } from '../../layout';
import { DeliveryOptionCard } from '../../atoms';
import {
  DeliveryOptionCarIcon,
  DeliveryOptionMotoIcon,
  DeliveryOptionTruckIcon,
  DeliveryOptionWalkIcon,
} from '../../icons';

export const HomeScreen: React.FC = () => {
  return (
    <ScreenLayout>
      <Stack direction="row" spacing={1} overflow="auto" mx={-2} px={2}>
        <DeliveryOptionCard
          selected
          color="#e2dcff"
          title="From $8.99"
          subTitle="by Courier"
          icon={<DeliveryOptionWalkIcon />}
        />
        <DeliveryOptionCard
          selected={false}
          color="#e2dcff"
          title="From $19.99"
          subTitle="by Scooter driver"
          icon={<DeliveryOptionMotoIcon />}
        />
        <DeliveryOptionCard
          selected={false}
          color="#e2dcff"
          title="From $25.99"
          subTitle="by Car driver"
          icon={<DeliveryOptionCarIcon />}
        />
        <DeliveryOptionCard
          selected={false}
          color="#e2dcff"
          title="From $35.99"
          subTitle="by Truck driver"
          icon={<DeliveryOptionTruckIcon />}
        />
      </Stack>
    </ScreenLayout>
  );
};
