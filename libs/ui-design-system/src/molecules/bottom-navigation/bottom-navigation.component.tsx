import React from 'react';
import { Paper, Stack, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
      <IconButton color="inherit" component={NavLink} to="/customer">
        <HomeIcon />
      </IconButton>
      <IconButton color="inherit" component={NavLink} to="/orders">
        <OrdersIcon />
      </IconButton>
      <IconButton color="inherit" component={NavLink} to="/notifications">
        <NotificationIcon />
      </IconButton>
      <IconButton color="inherit" component={NavLink} to="/settings">
        <SettingsIcon />
      </IconButton>
    </Paper>
  );
};
