import React from 'react';
import { Button, InputAdornment, Stack, Typography } from '@mui/material';
import { UserType } from '@demo-b/data-user';
import { useForm } from '@demo-b/data-tanstack-form';
import { z } from 'zod';
import { useStore } from '@tanstack/react-form';

import { UnauthorizedScreenLayout } from '../../layout';
import { OptionCard } from '../../atoms';

type SignupScreenProps = {
  onSubmit: (value: { userType: UserType; phoneNumber: string }) => void;
};

export const SignupScreen: React.FC<SignupScreenProps> = (props) => {
  const { onSubmit } = props;
  const form = useForm({
    defaultValues: {
      userType: 'customer',
      phoneNumber: '',
    },
    validators: {
      // Pass a schema or function to validate
      onChange: z.object({
        userType: z.enum(['customer', 'driver']),
        phoneNumber: z.string().length(8, 'Phone number is incorrect'),
      }),
    },
    onSubmit: (values) => onSubmit(values.value),
  });

  const userType = useStore(form.store, (state) => state.values.userType);

  return (
    <UnauthorizedScreenLayout>
      <Stack spacing={4} py={4}>
        <Typography textAlign="center" variant="h4" component="h1">
          Sign Up
        </Typography>
        <Stack
          spacing={5}
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <OptionCard
              selected={userType === 'customer'}
              onClick={() => form.setFieldValue('userType', 'customer')}
              label="I want to be a driver"
              imageSrc="images/signup-option-driver.png"
            />
            <OptionCard
              selected={userType === 'driver'}
              onClick={() => form.setFieldValue('userType', 'driver')}
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
              fullWidth
              size="large"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </UnauthorizedScreenLayout>
  );
};
