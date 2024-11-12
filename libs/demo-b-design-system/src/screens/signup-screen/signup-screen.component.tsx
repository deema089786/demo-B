import React from 'react';
import { Stack, Typography } from '@mui/material';

import { UnauthorizedScreenLayout } from '../../layout';
import { SignupForm } from '../../forms';

export const SignupScreen: React.FC = () => {
  return (
    <UnauthorizedScreenLayout>
      <Stack spacing={4} py={4}>
        <Typography textAlign="center" variant="h4" component="h1">
          Sign Up
        </Typography>
        <SignupForm />
      </Stack>
    </UnauthorizedScreenLayout>
  );
};
