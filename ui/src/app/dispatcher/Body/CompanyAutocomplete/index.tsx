import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { Company } from 'truckism-types';
import TsdAutocomplete from '@components/TsdAutocomplete';
import renderCompanyOption from './renderCompanyOption';

export interface CityAutocompleteProps {
  id: string;
  name: string;
  label: string;
  companies: Company[] | undefined;
  loadingText?: string;
}

const CompanyAutocomplete = ({
  id,
  name,
  label,
  companies,
  loadingText,
}: CityAutocompleteProps) => {
  const [value, setValue] = useState<Company | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [{ onBlur }, { error, touched }, { setValue: setFieldValue }] = useField<Company | null>(
    name,
  );

  const handleValueChange = (e: any, newValue: Company | null) => {
    setValue(newValue);
    setFieldValue(newValue);
  };

  const handleInputChange = (e: any, newValue: string) => {
    setInputValue(newValue);
  };

  useEffect(() => {
    setValue(null);
    setFieldValue(null);
  }, [companies, setFieldValue]);

  return (
    <TsdAutocomplete
      id={id}
      label={label}
      options={companies || []}
      getOptionLabel={(o) => o.name}
      getOptionKey={(o) => o.id}
      renderOption={renderCompanyOption}
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

export default CompanyAutocomplete;
