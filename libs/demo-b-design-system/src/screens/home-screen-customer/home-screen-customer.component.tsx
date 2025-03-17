import React, { useEffect, useState } from 'react';
import { Stack, Box, Button } from '@mui/material';
import { Map } from '@demo-b/feat-map';
import { z } from 'zod';
import { useForm } from '@demo-b/data-tanstack-form';
import { useSearchPlaces } from '@demo-b/data-places';
import { useStore } from '@tanstack/react-form';

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

export const HomeScreenCustomer: React.FC = () => {
  const [places, setPlaces] = useState<
    {
      addressPrimary: string;
      addressSecondary: string;
      placeId: string;
      getPlaceInfo: () => Promise<google.maps.Place>;
    }[]
  >([]);
  const form = useForm({
    defaultValues: {
      locationFrom: '',
      locationTo: '',
    },
    validators: {
      // Pass a schema or function to validate
      onChange: z.object({
        locationFrom: z.string(),
        locationTo: z.string(),
      }),
    },
    onSubmit: ({ value }) => {
      // Do something with form data
      alert(JSON.stringify(value, null, 2));
    },
  });
  const locationFrom = useStore(
    form.store,
    (state) => state.values.locationFrom,
  );
  const getPlaces = useSearchPlaces();
  useEffect(() => {
    console.log({ value: locationFrom });
    const exec = async () => {
      const res = await getPlaces(locationFrom);
      console.log(res);
      setPlaces(res);
    };
    exec().catch(console.error);
  }, [locationFrom, getPlaces]);
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
            <form.AppField
              name="locationFrom"
              children={(field) => (
                <field.SearchLocationField
                  label="From location"
                  icon={<RouteFromIcon color="primary" />}
                />
              )}
            />
            <form.AppField
              name="locationTo"
              children={(field) => (
                <field.SearchLocationField
                  label="To destination"
                  icon={<RouteToIcon color="primary" />}
                />
              )}
            />
            {/*<SearchLocationField*/}
            {/*  placeholder="From location"*/}
            {/*  icon={<RouteFromIcon color="primary" />}*/}
            {/*/>*/}
            {/*<SearchLocationField*/}
            {/*  placeholder="To destination"*/}
            {/*  icon={<RouteToIcon color="primary" />}*/}
            {/*/>*/}
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
        {/*<Button size="large" variant="contained" fullWidth>*/}
        {/*  Place the order*/}
        {/*</Button>*/}
        <Button
          onClick={form.handleSubmit}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
        >
          Place the order
        </Button>
        {places.map((place) => (
          <Button
            onClick={async () => {
              const info = await place.getPlaceInfo();
              console.log({
                lat: info.location?.lat(),
                lng: info.location?.lng(),
              });
            }}
          >
            {place.addressPrimary}
          </Button>
        ))}
      </Stack>
    </ScreenLayout>
  );
};
