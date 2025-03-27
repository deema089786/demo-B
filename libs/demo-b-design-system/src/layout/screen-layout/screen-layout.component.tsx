import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import { ScreenHeader } from '../screen-header';
import { BottomNavigation } from '../../molecules';

export const ScreenLayout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <Stack
      sx={{
        height: '100svh',
        overflow: 'hidden',
        backgroundColor: 'background.default',
      }}
    >
      <ScreenHeader />
      <Container
        maxWidth="sm"
        sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', pt: 2, pb: 12 }}
      >
        {children}
      </Container>

      <Box
        position="absolute"
        bottom="max(var(--safe-area-inset-bottom), 16px)"
        // bottom="0"
        left="0"
        right="0"
        px={2}
      >
        <BottomNavigation />
      </Box>
    </Stack>
  );
};
