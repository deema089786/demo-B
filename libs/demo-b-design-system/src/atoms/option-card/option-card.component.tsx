import React from 'react';
import { Avatar, Paper, ButtonBase, Typography } from '@mui/material';

const CARD_SIZE = '140px';
const IMAGE_SIZE = '60px';

type OptionCardProps = {
  selected: boolean;
  imageSrc: string;
  label: string;
};

export const OptionCard: React.FC<OptionCardProps> = (props) => {
  const { selected, imageSrc, label } = props;
  return (
    <Paper
      component={ButtonBase}
      variant="outlined"
      sx={{
        transition: 'all 250ms ease-out',
        display: 'flex',
        flexDirection: 'column',
        gap: (theme) => theme.spacing(1),
        width: CARD_SIZE,
        height: CARD_SIZE,
        // borderWidth: '2px',
        borderColor: (theme) =>
          selected ? theme.palette.primary.main : undefined,
      }}
    >
      <img
        draggable={false}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        src={imageSrc}
        style={{
          objectFit: 'cover',
          filter: selected ? 'brightness(1)' : 'brightness(0.5)',
        }}
      />
      <Typography
        // variant="subtitle1"
        // fontWeight="bold"
        color={selected ? 'textPrimary' : 'textSecondary'}
      >
        {label}
      </Typography>
    </Paper>
  );
};
