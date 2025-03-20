import React from 'react';
import { useFieldContext } from '@demo-b/data-tanstack-form';

import { TextField, TextFieldProps } from './text-field.component';

export const TextFieldTanstack: React.FC<TextFieldProps> = (props) => {
  const field = useFieldContext<string>();
  return (
    <TextField
      {...props}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  );
};
