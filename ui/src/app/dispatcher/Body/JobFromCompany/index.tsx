import React from 'react';
import { useTranslation } from 'react-i18next';
import { Company } from 'truckism-types';
import CompanyAutocomplete from '../CompanyAutocomplete';
import JobGridCell from '../JobGridCell';

export interface JobFromCompanyProps {
  companies: Company[] | undefined;
}

const JobFromCompany = ({ companies }: JobFromCompanyProps) => {
  const { t } = useTranslation();
  return (
    <JobGridCell align="right">
      <CompanyAutocomplete
        id="jobCompanyFrom"
        name="jobCompanyFrom"
        label={t('dispatcher.jobCompanyFrom')}
        companies={companies}
      />
    </JobGridCell>
  );
};

export default JobFromCompany;
