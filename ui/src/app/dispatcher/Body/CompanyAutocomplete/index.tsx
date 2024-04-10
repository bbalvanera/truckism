import React, { useMemo } from 'react';
import { Company } from 'truckism-types';
import JobFormAutocomplete, { JobFormAutocompleteOption } from '../JobFormAutocomplete';
import renderCompanyOption from './renderCompanyOption';

export interface CompanyAutocompleteProps {
  id: string;
  name: string;
  label: string;
  companies: Company[] | undefined;
  loadingText?: string;
}

function toJobFormAutocompleteOption(opt: Company): JobFormAutocompleteOption<Company> {
  return {
    key: opt.id,
    label: opt.name,
    value: opt,
  };
}

const CompanyAutocomplete = ({
  id,
  name,
  label,
  companies,
  loadingText,
}: CompanyAutocompleteProps) => {
  const options = useMemo(() => companies?.map(toJobFormAutocompleteOption), [companies]);

  return (
    <JobFormAutocomplete
      id={id}
      name={name}
      label={label}
      options={options}
      loadingText={loadingText}
      renderOption={renderCompanyOption}
    />
  );
};

export default CompanyAutocomplete;
