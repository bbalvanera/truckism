import React from 'react';
import { useTranslation } from 'react-i18next';
import { City } from 'truckism-types';
import CityAutocomplete from '../CityAutocomplete';
import JobGridCell from '../JobGridCell';

export interface JobFromCityProps {
  cities: City[] | undefined;
  loading?: boolean;
}

const JobFromCity = ({ cities, loading }: JobFromCityProps) => {
  const { t } = useTranslation();

  return (
    <JobGridCell align="left">
      <CityAutocomplete
        id="jobFrom"
        name="jobFrom"
        label={t('dispatcher.jobFrom')}
        cities={cities}
        loadingText={loading ? t('dispatcher.jobFromLoading') : undefined}
      />
    </JobGridCell>
  );
};

export default JobFromCity;
