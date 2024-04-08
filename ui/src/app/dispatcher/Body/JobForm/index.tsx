import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TsdAutocomplete from '@components/TsdAutocomplete';
import { useCities } from 'app/dispatcher/hooks';
import JobGridCell from '../JobGridCell';
import JobUrgencySelector, { Urgency } from '../JobUrgencySelector';
import CityAutocomplete from './CityAutocomplete';

const options = [
  { name: 'The Godfather', id: 1 },
  { name: 'Pulp Fiction', id: 2 },
];

const JobForm = () => {
  const [urgency, setUrgency] = useState<Urgency>('Standard');
  const { t } = useTranslation();
  const { cities, isLoading: loadingCities } = useCities();

  return (
    <>
      {/* Row 1 */}
      <JobGridCell align="left">
        <CityAutocomplete
          label={t('dispatcher.jobFrom')}
          cities={cities}
          loadingText={loadingCities ? t('dispatcher.jobFromLoading') : undefined}
        />
      </JobGridCell>
      <JobGridCell align="right">
        <TsdAutocomplete label={t('dispatcher.jobCompanyFrom')} options={options} />
      </JobGridCell>

      {/* Row 2 */}
      <JobGridCell align="left">
        <TsdAutocomplete label={t('dispatcher.jobTo')} options={options} />
      </JobGridCell>
      <JobGridCell align="right">
        <TsdAutocomplete label={t('dispatcher.jobCompanyTo')} options={options} />
      </JobGridCell>

      {/* Row 3 */}
      <JobGridCell align="left">
        <TsdAutocomplete label={t('dispatcher.cargo')} options={options} />
      </JobGridCell>
      <JobGridCell align="right">
        <JobUrgencySelector urgency={urgency} onChange={setUrgency} />
      </JobGridCell>
    </>
  );
};

export default JobForm;
