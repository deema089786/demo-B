import React, { useEffect, useState } from 'react';
import {
  InputAdornment,
  Paper,
  TextField,
  type TextFieldProps,
  Autocomplete,
} from '@mui/material';
import { Place, useSearchPlaces } from '@demo-b/data-places';

export type SearchLocationFieldProps = Omit<
  TextFieldProps,
  'value' | 'onChange' | 'onBlur' | 'onFocus'
> & {
  value?: Place | null;
  onChange?(place: Place | null): void;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
};

export const SearchLocationField: React.FC<SearchLocationFieldProps> = (
  props,
) => {
  const { label, placeholder, icon, value, onChange, ...rest } = props;
  const [places, setPlaces] = useState<Place[]>([]);

  const [inputValue, setInputValue] = React.useState('');
  const getPlaces = useSearchPlaces();
  useEffect(() => {
    const exec = async () => {
      const res = await getPlaces(String(inputValue));
      setPlaces(res);
    };
    exec().catch(console.error);
  }, [getPlaces, inputValue]);

  return (
    <Paper>
      <Autocomplete
        noOptionsText="No locations"
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : option.displayName
        }
        renderOption={(props, option) => {
          const { key, ...optionProps } = props;
          return (
            <li key={key} {...optionProps}>
              {option.displayName}
            </li>
          );
        }}
        value={value}
        onChange={(e, place) => onChange?.(place)}
        options={places}
        autoComplete
        openOnFocus
        includeInputInList
        filterSelectedOptions
        filterOptions={(x) => x}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            {...rest}
            label={label}
            placeholder={placeholder}
            // variant="outlined"
            // // size="small"
            // // fullWidth
            // slotProps={{
            //   input: {
            //     startAdornment: icon ? (
            //       <InputAdornment position="start">{icon}</InputAdornment>
            //     ) : undefined,
            //   },
            // }}
            // {...rest}
          />
        )}
      />
    </Paper>
  );
};
