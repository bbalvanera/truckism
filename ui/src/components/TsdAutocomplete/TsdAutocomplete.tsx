import React from 'react';
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export type TsdAutocompleteProps<Value = any> = {
  label: string;
  error?: boolean;
  helperText?: string;
} & Omit<AutocompleteProps<Value, false, false, false>, 'renderInput'>;

// prettier-ignore
const TsdAutocomplete = <Value = any>({
  label,
  options,
  error,
  helperText,
  ...rest
}: TsdAutocompleteProps<Value>) => (
  <div>
    <Autocomplete
      {...rest}
      disablePortal
      options={options}
      renderInput={(params) => (
        <TextField {...params} label={label} error={error} helperText={helperText || ' '} />
      )}
    />
  </div>
  );

export default TsdAutocomplete;
