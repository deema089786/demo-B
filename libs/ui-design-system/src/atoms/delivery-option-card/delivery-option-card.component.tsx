import React from 'react';
import {
  Paper,
  Stack,
  Typography,
  ButtonBase,
  Box,
  SvgIcon,
} from '@mui/material';

const SIZE_WIDTH = '120px';
const SIZE_HEIGHT = '150px';

type DeliveryOptionCardProps = {
  selected: boolean;
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  onClick?(): void;
};

export const DeliveryOptionCard: React.FC<DeliveryOptionCardProps> = (
  props,
) => {
  const { selected, title, subTitle, icon, onClick } = props;

  return (
    <Paper
      variant={selected ? 'elevation' : 'outlined'}
      component={ButtonBase}
      onClick={onClick}
      sx={{
        p: selected ? 0 : 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        transition: 'all 250ms ease-out',
        width: SIZE_WIDTH,
        minWidth: SIZE_WIDTH,
        height: SIZE_HEIGHT,
        overflow: 'hidden',
        border: selected ? '2px solid' : undefined,
        borderColor: selected ? 'primary.main' : undefined,
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
        <SvgIcon fontSize={'large'} color={selected ? 'primary' : 'inherit'}>
          {icon}
        </SvgIcon>
      </Box>
      <Paper
        component={Stack}
        variant={selected ? 'elevation' : 'outlined'}
        justifyContent="center"
        sx={{
          borderRadius: '12px',
          transition: 'all 250ms ease-out',
          height: selected ? '64px' : '48px',
        }}
      >
        <Typography variant="body2" textAlign="center" lineHeight="0.9">
          {title}
        </Typography>
        <Typography variant="caption" textAlign="center" fontSize="0.6rem">
          {subTitle}
        </Typography>
      </Paper>
    </Paper>
  );
};
