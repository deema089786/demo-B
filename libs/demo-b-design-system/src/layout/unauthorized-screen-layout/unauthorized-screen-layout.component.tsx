import React from 'react';
import { Container, Stack } from '@mui/material';

export const UnauthorizedScreenLayout: React.FC<React.PropsWithChildren> = (
  props,
) => {
  const { children } = props;
  return (
    <Stack
      sx={{
        height: '100svh',
        overflow: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}
      >
        {children}
      </Container>
    </Stack>
  );
};
