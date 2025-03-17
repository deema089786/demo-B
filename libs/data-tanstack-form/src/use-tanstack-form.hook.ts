import { createFormHook } from '@tanstack/react-form';

import { SearchLocationFieldTanstack } from '../../demo-b-design-system/src/inputs/SearchLocationField/search-location-field.tanstack';
import { fieldContext, formContext } from './tanstack-form.context';
const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    SearchLocationField: SearchLocationFieldTanstack,
  },
  formComponents: {},
});

export const useForm = useAppForm;
