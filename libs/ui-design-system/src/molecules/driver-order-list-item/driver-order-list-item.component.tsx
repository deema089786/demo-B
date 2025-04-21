import React from 'react';
import {
  Button,
  ButtonBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import {
  AcceptOrderIcon,
  HideIcon,
  MoreHorizontalIcon,
  RouteFromIcon,
  RouteToIcon,
} from '../../icons';
import { deliveryTypeIcon } from './driver-order-list-item.constants';

type DriverOrderListItemProps = {
  price: number;
  deliveryType: 'byCourier' | 'byScooter' | 'byCar' | 'byTruck';
  route: {
    timeTotalMin: number;
    distanceTotalKm: number;
    from: {
      address: string;
      timeMin: number;
      distanceKm: number;
    };
    to: {
      address: string;
      timeMin: number;
      distanceKm: number;
    };
  };
  actionsDisabled?: boolean;
};

export const DriverOrderListItem: React.FC<DriverOrderListItemProps> = (
  props,
) => {
  const { price, deliveryType, route, actionsDisabled = false } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      component={Paper}
      p={1}
      direction="row"
      spacing={1}
      justifyContent="space-between"
    >
      <Stack spacing={1}>
        <Stack
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{
            flex: 1,
            minHeight: 64,
            height: 64,
            borderRadius: '12px',
          }}
        >
          <Typography align="center" variant="h6" fontWeight="bold">
            {price}$
          </Typography>
          <Typography textAlign="center" variant="caption">
            {route.timeTotalMin} min
          </Typography>
          <Typography textAlign="center" variant="caption">
            {route.distanceTotalKm} km
          </Typography>
        </Stack>
        <Stack
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 64,
            height: 32,
            borderRadius: '12px',
          }}
        >
          {deliveryTypeIcon[deliveryType]}
        </Stack>
      </Stack>
      <Paper variant="outlined" sx={{ flex: 1, borderRadius: '12px' }}>
        <List dense>
          <ListItem dense>
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <RouteFromIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={route.from.address}
              secondary={`${route.from.timeMin} min • ${route.from.distanceKm} km`}
            />
          </ListItem>
          <ListItem dense>
            <ListItemIcon sx={{ minWidth: 0, mr: 1 }}>
              <RouteToIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={route.to.address}
              secondary={`${route.to.timeMin} min • ${route.to.distanceKm} km`}
            />
          </ListItem>
        </List>
      </Paper>
      {!actionsDisabled && (
        <Stack spacing={1}>
          <Paper
            sx={{
              bgcolor: '#017a4a',
              flex: 1,
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            component={ButtonBase}
          >
            <AcceptOrderIcon />
            <Typography variant="caption">Accept</Typography>
          </Paper>
          <Button
            sx={{ borderRadius: '12px' }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreHorizontalIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem dense onClick={handleClose}>
              <ListItemText primary="View details" />
            </MenuItem>
            <MenuItem dense onClick={handleClose} sx={{ color: 'error.main' }}>
              <HideIcon sx={{ mr: 1 }} />
              <ListItemText sx={{ ml: 'auto' }} primary="Hide" />
            </MenuItem>
          </Menu>
        </Stack>
      )}
    </Stack>
  );
};
