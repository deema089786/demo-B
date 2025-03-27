import { createFormHook } from '@tanstack/react-form';

import { SearchLocationFieldTanstack } from '../../demo-b-design-system/src/inputs/SearchLocationField/search-location-field.tanstack';
import { TextFieldTanstack } from '../../demo-b-design-system/src/inputs/TextField/text-field.tanstack';
import { DeliveryTypeSelectorTanstack } from '../../demo-b-design-system/src/inputs/DeliveryTypeSelector/delivery-type-selector.tanstack';
import { fieldContext, formContext } from './tanstack-form.context';
const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    SearchLocationField: SearchLocationFieldTanstack,
    TextField: TextFieldTanstack,
    DeliveryTypeSelector: DeliveryTypeSelectorTanstack,
  },
  formComponents: {},
});

export const useForm = useAppForm;
