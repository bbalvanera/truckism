import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export interface TsdAutocompleteProps {
  label: string;
  options: { label: string }[];
  error?: boolean;
  helperText?: string;
}

const TsdAutocomplete = ({ label, options, error, helperText }: TsdAutocompleteProps) => (
  <div>
    <Autocomplete
      disablePortal
      options={options}
      renderInput={(params) => (
        <TextField {...params} label={label} error={error} helperText={helperText || ' '} />
      )}
    />
  </div>
);

export default TsdAutocomplete;
