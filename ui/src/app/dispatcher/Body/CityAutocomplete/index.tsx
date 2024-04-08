import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { City } from 'truckism-types';
import TsdAutocomplete from '@components/TsdAutocomplete';
import renderCityOption from './renderCityOption';

export interface CityAutocompleteProps {
  id: string;
  name: string;
  label: string;
  cities: City[] | undefined;
  loadingText?: string;
}

const CityAutocomplete = ({ id, name, label, cities, loadingText }: CityAutocompleteProps) => {
  const [value, setValue] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [{ onBlur }, { error, touched }, { setValue: setFieldValue }] = useField<City | null>(name);

  const handleValueChange = (e: any, newValue: City | null) => {
    setValue(newValue);
    setFieldValue(newValue);
  };

  const handleInputChange = (e: any, newValue: string) => {
    setInputValue(newValue);
  };

  useEffect(() => {
    setValue(null);
    setFieldValue(null);
  }, [cities, setFieldValue]);

  return (
    <TsdAutocomplete
      id={id}
      label={label}
      options={cities || []}
      getOptionLabel={(o) => o.localizedName}
      getOptionKey={(o) => o.id}
      renderOption={renderCityOption}
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

export default CityAutocomplete;
