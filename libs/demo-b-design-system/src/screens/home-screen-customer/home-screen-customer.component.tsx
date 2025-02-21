import React from 'react';
import { Stack, Box } from '@mui/material';
import { Map } from '@demo-b/feat-map';

import { ScreenLayout } from '../../layout';
import { DeliveryOptionCard } from '../../atoms';
import {
  DeliveryOptionCarIcon,
  DeliveryOptionMotoIcon,
  DeliveryOptionTruckIcon,
  DeliveryOptionWalkIcon,
  RouteFromIcon,
  RouteToIcon,
} from '../../icons';
import { SearchLocationField } from '../../inputs';

export const HomeScreenCustomer: React.FC = () => {
  return (
    <ScreenLayout>
      <Stack spacing={2} useFlexGap>
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
        <Box position="relative" zIndex={1}>
          <Stack spacing={1} position="absolute" width="100%" pt={2}>
            <SearchLocationField
              placeholder="From location"
              icon={<RouteFromIcon color="primary" />}
            />
            <SearchLocationField
              placeholder="To destination"
              icon={<RouteToIcon color="primary" />}
            />
          </Stack>
        </Box>
        <Box
          // mt used to handle extra margin from empty container for search fields
          mt={-2}
          mx={-2}
          width="calc(100% + 32px)"
          overflow="hidden"
        >
          <Map />
        </Box>
      </Stack>
    </ScreenLayout>
  );
};
