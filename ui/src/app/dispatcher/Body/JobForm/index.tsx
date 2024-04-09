import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TsdAutocomplete from '@components/TsdAutocomplete';
import { useGameData } from 'app/dispatcher/hooks';
import JobFromCity from '../JobFromCity';
import JobFromCompany from '../JobFromCompany';
import JobGridCell from '../JobGridCell';
import JobToCity from '../JobToCity';
import JobToCompany from '../JobToCompany';
import JobUrgencySelector, { Urgency } from '../JobUrgencySelector';
import FormResetter from './FormResetter';

const options = [
  { name: 'The Godfather', id: 1 },
  { name: 'Pulp Fiction', id: 2 },
];

const validationSchema = Yup.object().shape({
  jobFrom: Yup.object().required('Please select a city').nonNullable('Please select a city'),
  jobCompanyFrom: Yup.object()
    .required('Please select a company')
    .nonNullable('Please select a company'),
  jobTo: Yup.object().required('Please select a city').nonNullable('Please select a city'),
  jobCompanyTo: Yup.object()
    .required('Please select a company')
    .nonNullable('Please select a company'),
});

const JobForm = () => {
  const [urgency, setUrgency] = useState<Urgency>('Standard');
  const { t } = useTranslation();
  const { gameData, isLoading: loadingCities } = useGameData();

  const { cities } = gameData || {};

  return (
    <Formik
      onSubmit={(...all) => {
        console.log('all', all);
      }}
      validationSchema={validationSchema}
      initialValues={{} as any}
    >
      {({ values, resetForm }) => (
        <Form>
          <FormResetter cities={cities} resetForm={resetForm} />

          <JobFromCity cities={cities} loading={loadingCities} />
          <JobFromCompany companies={values?.jobFrom?.companies} />

          <JobToCity cities={cities} loading={loadingCities} />
          <JobToCompany companies={values?.jobTo?.companies} />

          <JobGridCell align="left">
            <TsdAutocomplete label={t('dispatcher.cargo')} options={options} />
          </JobGridCell>
          <JobGridCell align="right">
            <JobUrgencySelector urgency={urgency} onChange={setUrgency} />
          </JobGridCell>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default JobForm;
