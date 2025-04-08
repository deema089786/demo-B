import React from 'react';
import { Paper, Stack, IconButton } from '@mui/material';

import {
  HomeIcon,
  CheckListIcon as OrdersIcon,
  NotificationIcon,
  SettingsIcon,
} from '../../icons';

export const BottomNavigation: React.FC = () => {
  return (
    <Paper
      // bgcolor="primary.main"
      component={Stack}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={2}
      p={1}
      width="100%"
      borderRadius="10000px !important"
      sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
    >
      <IconButton color="inherit">
        <HomeIcon />
      </IconButton>
      <IconButton color="inherit">
        <OrdersIcon />
      </IconButton>
      <IconButton color="inherit">
        <NotificationIcon />
      </IconButton>
      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>
    </Paper>
  );
};
