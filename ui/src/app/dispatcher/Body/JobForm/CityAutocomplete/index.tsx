import React, { useEffect, useState } from 'react';
import { City } from 'truckism-types';
import TsdAutocomplete from '@components/TsdAutocomplete';
import renderCityOption from './renderCityOption';

export interface CityAutocompleteProps {
  label: string;
  cities: City[] | undefined;
  loadingText?: string;
}

const CityAutocomplete = ({ label, cities, loadingText }: CityAutocompleteProps) => {
  const [cityFrom, setCityFrom] = useState<City | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleValueChange = (e: any, newCity: City | null) => {
    setCityFrom(newCity);
  };

  const handleInputChange = (e: any, value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    setCityFrom(null);
  }, [cities]);

  return (
    <TsdAutocomplete
      label={label}
      options={cities || []}
      getOptionLabel={(o) => o.localizedName}
      getOptionKey={(o) => o.id}
      renderOption={renderCityOption}
      value={cityFrom}
      inputValue={inputValue}
      onChange={handleValueChange}
      onInputChange={handleInputChange}
      loading={!!loadingText}
      loadingText={loadingText}
    />
  );
};

export default CityAutocomplete;
