import React from 'react';
import { Stack, Button, InputAdornment } from '@mui/material';
import { useForm } from '@demo-b/data-tanstack-form';
import { z } from 'zod';
import { useStore } from '@tanstack/react-form';

import { OptionCard } from '../../atoms';

export const SignupForm: React.FC = () => {
  const form = useForm({
    defaultValues: {
      userType: 'customer',
      phoneNumber: '',
    },
    validators: {
      // Pass a schema or function to validate
      onChange: z.object({
        userType: z.enum(['customer', 'driver']),
        phoneNumber: z.string(),
      }),
    },
    onSubmit: ({ value }) => {
      // Do something with form data
      alert(JSON.stringify(value, null, 2));
    },
  });
  const userType = useStore(form.store, (state) => state.values.userType);
  return (
    <Stack spacing={5}>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <OptionCard
          selected={userType === 'driver'}
          onClick={() => form.setFieldValue('userType', 'driver')}
          label="I want to be a driver"
          imageSrc="images/signup-option-driver.png"
        />
        <OptionCard
          selected={userType === 'customer'}
          onClick={() => form.setFieldValue('userType', 'customer')}
          label="I want to order delivery"
          imageSrc="images/signup-option-client.png"
        />
      </Stack>
      <Stack spacing={2}>
        <form.AppField
          name="phoneNumber"
          children={(field) => (
            <field.TextField
              label="Phone number"
              placeholder="55555555"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">+1</InputAdornment>
                  ),
                },
              }}
            />
          )}
        />
        <Button
          type="submit"
          onClick={form.handleSubmit}
          fullWidth
          size="large"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};
