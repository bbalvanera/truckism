import React, { useMemo } from 'react';
import { Cargo } from 'truckism-types';
import JobFormAutocomplete, { JobFormAutocompleteOption } from '../JobFormAutocomplete';
import renderCargoOption from './renderCargoOption';

export interface CargoAutocompleteProps {
  id: string;
  name: string;
  label: string;
  cargoes: Cargo[] | undefined;
  loadingText?: string;
}

function toJobFormAutocompleteOption(opt: Cargo): JobFormAutocompleteOption<Cargo> {
  return {
    key: opt.id,
    label: opt.localizedName,
    value: opt,
  };
}

const CargoAutocomplete = ({ id, name, label, cargoes, loadingText }: CargoAutocompleteProps) => {
  const options = useMemo(() => cargoes?.map(toJobFormAutocompleteOption), [cargoes]);

  return (
    <JobFormAutocomplete
      id={id}
      name={name}
      label={label}
      options={options}
      loadingText={loadingText}
      renderOption={renderCargoOption}
    />
  );
};

export default CargoAutocomplete;
