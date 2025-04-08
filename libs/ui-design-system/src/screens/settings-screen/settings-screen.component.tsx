import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
} from '@mui/material';

import { ScreenLayout } from '../../layout';
import { DeleteAccountIcon, LogoutIcon } from '../../icons';

export const SettingsScreen: React.FC = () => {
  return (
    <ScreenLayout>
      <Stack>
        <Paper sx={{ overflow: 'hidden' }}>
          <List disablePadding>
            <ListItem disablePadding disableGutters>
              <ListItemButton>
                <ListItemIcon>
                  <DeleteAccountIcon color="error" />
                </ListItemIcon>
                <ListItemText
                  primary="Delete Account"
                  primaryTypographyProps={{ color: 'error' }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding disableGutters>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>
      </Stack>
    </ScreenLayout>
  );
};
