import React from 'react';
import { useTranslation } from 'react-i18next';
import { Company } from 'truckism-types';
import CompanyAutocomplete from '../CompanyAutocomplete';
import JobGridCell from '../JobGridCell';

export interface JobToCompanyProps {
  companies: Company[] | undefined;
}

const JobToCompany = ({ companies }: JobToCompanyProps) => {
  const { t } = useTranslation();

  return (
    <JobGridCell align="right">
      <CompanyAutocomplete
        id="jobCompanyTo"
        name="jobCompanyTo"
        label={t('dispatcher.jobCompanyTo')}
        companies={companies}
      />
    </JobGridCell>
  );
};

export default JobToCompany;
