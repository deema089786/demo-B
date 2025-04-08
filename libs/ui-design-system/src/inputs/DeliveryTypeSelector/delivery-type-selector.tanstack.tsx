import React from 'react';
import { useFieldContext } from '@demo-b/data-tanstack-form';

import { DeliveryTypeSelector } from './delivery-type-selector.component';

export const DeliveryTypeSelectorTanstack = () => {
  const field = useFieldContext<
    'byCourier' | 'byScooter' | 'byCar' | 'byTruck'
  >();
  return (
    <DeliveryTypeSelector
      value={field.state.value}
      onChange={field.handleChange}
    />
  );
};
