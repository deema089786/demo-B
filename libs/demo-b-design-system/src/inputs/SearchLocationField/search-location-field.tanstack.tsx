import React from 'react';
import { useFieldContext } from '@demo-b/data-tanstack-form';

import {
  SearchLocationField,
  SearchLocationFieldProps,
} from './search-location-field.component';

export const SearchLocationFieldTanstack: React.FC<SearchLocationFieldProps> = (
  props,
) => {
  const field = useFieldContext<string>();
  return (
    <SearchLocationField
      {...props}
      value={field.state.value}
      onChange={(e) => field.handleChange(e.target.value)}
    />
  );
};
