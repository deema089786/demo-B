import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const DeleteAccountIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
    >
      <path
        d="M13 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C7.97679 14.053 10.8425 13.6575 13.5 14.2952"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
        stroke="currentColor"
        stroke-width="1.5"
      />
      <path
        d="M16 22L19 19M19 19L22 16M19 19L16 16M19 19L22 22"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  </SvgIcon>
);
