import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cargo } from 'truckism-types';
import CargoAutocomplete from '../CargoAutocomplete';
import JobGridCell from '../JobGridCell';

export interface JobCargoProps {
  cargoes: Cargo[] | undefined;
  loading?: boolean;
}

const JobCargo = ({ cargoes, loading }: JobCargoProps) => {
  const { t } = useTranslation();

  return (
    <JobGridCell align="left">
      <CargoAutocomplete
        id="jobCargo"
        name="jobCargo"
        label={t('dispatcher.cargo')}
        cargoes={cargoes}
        loadingText={loading ? t('dispatcher.jobFromLoading') : undefined}
      />
    </JobGridCell>
  );
};

export default JobCargo;
