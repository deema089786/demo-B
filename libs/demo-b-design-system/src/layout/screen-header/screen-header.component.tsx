import React from 'react';
import { Stack, Avatar } from '@mui/material';

export const ScreenHeader: React.FC = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        p: 1,
        pt: (theme) => `calc(${theme.spacing(1)} + var(--safe-area-inset-top))`,
        borderBottom: '2px solid',
        borderColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Avatar
        src="images/logo.png"
        variant="square"
        sx={{ width: 24, height: 24 }}
      />
    </Stack>
  );
};
