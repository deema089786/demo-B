import React from 'react';
import { useFieldContext } from '@demo-b/util-tanstack-form';
import { Place } from '@demo-b/data-places';

import {
  SearchLocationField,
  SearchLocationFieldProps,
} from './search-location-field.component';

export const SearchLocationFieldTanstack: React.FC<SearchLocationFieldProps> = (
  props,
) => {
  const field = useFieldContext<Place | null>();
  return (
    <SearchLocationField
      {...props}
      value={field.state.value}
      onChange={field.handleChange}
    />
  );
};
