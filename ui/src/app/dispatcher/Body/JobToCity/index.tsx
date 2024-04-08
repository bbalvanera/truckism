import React from 'react';
import { useTranslation } from 'react-i18next';
import { City } from 'truckism-types';
import CityAutocomplete from '../CityAutocomplete';
import JobGridCell from '../JobGridCell';

export interface JobToCityProps {
  cities: City[] | undefined;
  loading?: boolean;
}

const JobToCity = ({ cities, loading }: JobToCityProps) => {
  const { t } = useTranslation();

  return (
    <JobGridCell align="left">
      <CityAutocomplete
        id="jobTo"
        name="jobTo"
        label={t('dispatcher.jobTo')}
        cities={cities}
        loadingText={loading ? t('dispatcher.jobFromLoading') : undefined}
      />
    </JobGridCell>
  );
};

export default JobToCity;
