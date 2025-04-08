import React from 'react';
import { useFieldContext } from '@demo-b/data-tanstack-form';

import { TextField, TextFieldProps } from './text-field.component';

export const TextFieldTanstack: React.FC<TextFieldProps> = (props) => {
  const field = useFieldContext<string>();
  const errorMessage: string | null =
    field.state.meta.errors.length > 0
      ? field.state.meta.errors[0].message
      : null;
  return (
    <TextField
      {...props}
      value={field.state.value}
      error={errorMessage !== null}
      helperText={errorMessage}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  );
};
