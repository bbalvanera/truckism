import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { AutocompleteRenderOptionState } from '@mui/material';
import TsdAutocomplete from '@components/TsdAutocomplete';

export type JobFormAutocompleteOption<TValue> = {
  key: string;
  label: string;
  value: TValue;
};

export interface JobFormAutocompleteProps<T> {
  id: string;
  name: string;
  label: string;
  options: JobFormAutocompleteOption<T>[] | undefined;
  loadingText?: string;
  renderOption?: (
    props: any,
    option: JobFormAutocompleteOption<T>,
    state: AutocompleteRenderOptionState,
  ) => JSX.Element;
}

// prettier-ignore
const JobFormAutocomplete = <T = any>({
  id,
  name,
  label,
  options,
  loadingText,
  renderOption,
}: JobFormAutocompleteProps<T>) => {
  const [value, setValue] = useState<JobFormAutocompleteOption<T> | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [{ onBlur }, { error, touched }, { setValue: setFieldValue }] = useField<T | null>(name);

  const handleValueChange = (e: any, newValue: JobFormAutocompleteOption<T> | null) => {
    setValue(newValue);
    setFieldValue(newValue?.value ?? null);
  };

  const handleInputChange = (e: any, newValue: string) => {
    setInputValue(newValue);
  };

  useEffect(() => {
    setValue(null);
    setFieldValue(null);
  }, [options, setFieldValue]);

  return (
    <TsdAutocomplete
      id={id}
      label={label}
      getOptionKey={o => o.key}
      options={options || []}
      renderOption={renderOption}
      value={value}
      inputValue={inputValue}
      onChange={handleValueChange}
      onInputChange={handleInputChange}
      onBlur={onBlur}
      loading={!!loadingText}
      loadingText={loadingText}
      error={!!(touched && error)}
      helperText={touched ? error : undefined}
    />
  );
};

export default JobFormAutocomplete;
