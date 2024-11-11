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
        backgroundColor: 'background.paper',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', pt: 6, pb: 8 }}
      >
        {children}
      </Container>
      <Box position="absolute" top="0" left="0" right="0">
        <ScreenHeader />
      </Box>
      <Box position="absolute" bottom="0" left="0" right="0" p={2}>
        <BottomNavigation />
      </Box>
    </Stack>
  );
};
