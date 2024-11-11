import React from 'react';
import { Paper, Stack, IconButton } from '@mui/material';
import {
  HomeOutlined as HomeIcon,
  SettingsOutlined as SettingsIcon,
  FormatListBulletedOutlined as OrdersIcon,
  NotificationsOutlined as NotificationsIcon,
} from '@mui/icons-material';

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
        <NotificationsIcon />
      </IconButton>
      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>
    </Paper>
  );
};
