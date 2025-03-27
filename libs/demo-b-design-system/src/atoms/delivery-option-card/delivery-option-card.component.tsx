import React from 'react';
import {
  Paper,
  Stack,
  lighten,
  darken,
  Typography,
  ButtonBase,
  Box,
  SvgIcon,
} from '@mui/material';

const SIZE_WIDTH = '120px';
const SIZE_HEIGHT = '180px';

type DeliveryOptionCardProps = {
  color: string;
  selected: boolean;
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  onClick?(): void;
};

export const DeliveryOptionCard: React.FC<DeliveryOptionCardProps> = (
  props,
) => {
  const { color, selected, title, subTitle, icon, onClick } = props;
  const colorLight = lighten(color, 0.9);
  const colorDark = darken(color, 0.5);

  return (
    <Paper
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
        bgcolor: color,
        overflow: 'hidden',
        border: `4px solid ${colorLight}`,
        borderWidth: selected ? '4px' : '0px',
      }}
    >
      <Box
        color={colorDark}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <SvgIcon fontSize={'large'} color="inherit">
          {icon}
        </SvgIcon>
      </Box>
      <Paper
        elevation={selected ? 0 : 1}
        component={Stack}
        justifyContent="center"
        sx={{
          borderRadius: selected ? '12px' : '16px',
          transition: 'all 250ms ease-out',
          // borderBottomLeftRadius: 0,
          // borderBottomRightRadius: 0,
          height: selected ? '64px' : '48px',
          bgcolor: colorLight,
          color: colorDark,
        }}
      >
        <Typography
          variant="body2"
          // fontWeight="bold"
          textAlign="center"
          lineHeight="0.9"
        >
          {title}
        </Typography>
        <Typography variant="caption" textAlign="center" fontSize="0.6rem">
          {subTitle}
        </Typography>
      </Paper>
    </Paper>
  );
};
