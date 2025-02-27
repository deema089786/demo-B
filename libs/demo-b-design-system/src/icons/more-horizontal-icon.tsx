import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const MoreHorizontalIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
    >
      <rect
        x="18"
        y="10.5"
        width="3"
        height="3"
        rx="1"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <rect
        x="10.5"
        y="10.5"
        width="3"
        height="3"
        rx="1"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <rect
        x="3"
        y="10.5"
        width="3"
        height="3"
        rx="1"
        stroke="currentColor"
        stroke-width="1.5"
      />
    </svg>
  </SvgIcon>
);
