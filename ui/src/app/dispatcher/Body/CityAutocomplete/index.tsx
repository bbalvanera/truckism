import React, { useMemo } from 'react';
import { City } from 'truckism-types';
import JobFormAutocomplete, { JobFormAutocompleteOption } from '../JobFormAutocomplete';
import renderCityOption from './renderCityOption';

export interface CityAutocompleteProps {
  id: string;
  name: string;
  label: string;
  loadingText?: string;
  cities: City[] | undefined;
}

function toJobFormAutocompleteOption(opt: City): JobFormAutocompleteOption<City> {
  return {
    key: opt.id,
    label: opt.localizedName,
    value: opt,
  };
}

const CityAutocomplete = ({ id, name, label, loadingText, cities }: CityAutocompleteProps) => {
  const options = useMemo(() => cities?.map(toJobFormAutocompleteOption), [cities]);

  return (
    <JobFormAutocomplete
      id={id}
      name={name}
      label={label}
      options={options}
      loadingText={loadingText}
      renderOption={renderCityOption}
    />
  );
};

export default CityAutocomplete;
