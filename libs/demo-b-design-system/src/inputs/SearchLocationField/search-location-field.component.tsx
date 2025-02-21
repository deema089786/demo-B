import React from 'react';
import { InputAdornment, Paper, TextField } from '@mui/material';

type SearchLocationFieldProps = {
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
};

export const SearchLocationField: React.FC<SearchLocationFieldProps> = (
  props,
) => {
  const { label, placeholder, icon } = props;
  return (
    <Paper>
      <TextField
        label={label}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth
        slotProps={{
          input: {
            startAdornment: icon ? (
              <InputAdornment position="start">{icon}</InputAdornment>
            ) : undefined,
          },
        }}
      />
    </Paper>
  );
};
