import React from 'react';
import {
  Stack,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from '@mui/material';

import { OptionCard } from '../../atoms';

export const SignupForm: React.FC = () => {
  return (
    <Stack spacing={5}>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <OptionCard
          selected={false}
          label="I want to be a driver"
          imageSrc="images/signup-option-driver.png"
        />
        <OptionCard
          selected={true}
          label="I want to order delivery"
          imageSrc="images/signup-option-client.png"
        />
      </Stack>
      <Stack spacing={2}>
        <TextField
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
        <Button fullWidth size="large" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};
