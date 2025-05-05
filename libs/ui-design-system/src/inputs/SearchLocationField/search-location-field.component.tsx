import React, { useEffect, useState } from 'react';
import {
  Paper,
  TextField,
  type TextFieldProps,
  Autocomplete,
} from '@mui/material';
import {
  Place,
  PlaceSearchItem,
  useSearchPlaces,
  loadPlaceByPlaceId,
} from '@demo-b/data-places';

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
  const [placeSearchItems, setPlaceSearchItems] = useState<PlaceSearchItem[]>(
    [],
  );

  const [inputValue, setInputValue] = React.useState('');
  const getPlacesSearchItem = useSearchPlaces();
  useEffect(() => {
    const exec = async () => {
      const res = await getPlacesSearchItem(String(inputValue));
      setPlaceSearchItems(res);
    };
    exec().catch(console.error);
  }, [getPlacesSearchItem, inputValue]);

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
        onChange={async (e, placeSearchItem) => {
          if (!placeSearchItem) {
            onChange?.(null);
            return;
          }
          const place = await loadPlaceByPlaceId({
            placeId: placeSearchItem.id,
          });
          onChange?.(place);
        }}
        options={placeSearchItems}
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
