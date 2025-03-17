import React from 'react';
import {
  InputAdornment,
  Paper,
  TextField,
  TextFieldProps,
} from '@mui/material';

export type SearchLocationFieldProps = TextFieldProps & {
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
};

export const SearchLocationField: React.FC<SearchLocationFieldProps> = (
  props,
) => {
  const { label, placeholder, icon, ...rest } = props;
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
        {...rest}
      />
    </Paper>
  );
};
