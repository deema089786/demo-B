import React, { useEffect } from 'react';
import { Stack, Box, Button } from '@mui/material';
import { Map } from '@demo-b/feat-map';
import { useForm } from '@demo-b/util-tanstack-form';
import { Place } from '@demo-b/data-places';

import { ScreenLayout } from '../../layout';
import { RouteFromIcon, RouteToIcon } from '../../icons';
import { DriverOrderListItem } from '../../molecules/driver-order-list-item';
import { PlaceOrder, placeOrderSchema } from './home-screen-customer.schema';

export type HomeScreenCustomerProps = {
  defaultLocation: Place | null;
};

export const HomeScreenCustomer: React.FC<HomeScreenCustomerProps> = (
  props,
) => {
  const { defaultLocation } = props;

  const form = useForm({
    defaultValues: {
      deliveryType: 'byScooter',
      locationFrom: null,
      locationTo: null,
    } as PlaceOrder,
    validators: {
      onChange: placeOrderSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((res) => setTimeout(res, 1000));
      // Do something with form data
      alert(JSON.stringify(value, null, 2));
    },
  });

  useEffect(() => {
    form.setFieldValue('locationFrom', defaultLocation);
  }, [defaultLocation, form]);

  return (
    <ScreenLayout>
      <Stack
        spacing={2}
        useFlexGap
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.AppField
          name="deliveryType"
          children={(field) => <field.DeliveryTypeSelector />}
        />
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
        <form.Subscribe
          selector={(state) => [
            state.values.deliveryType,
            state.values.locationFrom,
            state.values.locationTo,
          ]}
          children={([deliveryType, locationFrom, locationTo]) => {
            console.log({ locationFrom });
            return (
              <DriverOrderListItem
                actionsDisabled
                price={13}
                deliveryType={deliveryType}
                route={{
                  timeTotalMin: 23,
                  distanceTotalKm: 3.5,
                  from: {
                    address: locationFrom
                      ? locationFrom.displayName
                      : 'Main street 55',
                    timeMin: 8,
                    distanceKm: 0.6,
                  },
                  to: {
                    address: locationTo
                      ? locationTo.displayName
                      : 'Main street 55 Old way home',
                    timeMin: 15,
                    distanceKm: 2.9,
                  },
                }}
              />
            );
          }}
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              size="large"
              variant="contained"
              fullWidth
              disabled={!canSubmit}
            >
              Place the order
              {isSubmitting && '...'}
            </Button>
          )}
        />
      </Stack>
    </ScreenLayout>
  );
};
