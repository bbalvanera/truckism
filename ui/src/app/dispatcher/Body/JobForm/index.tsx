import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useGameData } from 'app/dispatcher/hooks';
import JobCargo from '../JobCargo';
import JobFromCity from '../JobFromCity';
import JobFromCompany from '../JobFromCompany';
import JobGridCell from '../JobGridCell';
import JobToCity from '../JobToCity';
import JobToCompany from '../JobToCompany';
import JobUrgencySelector, { Urgency } from '../JobUrgencySelector';
import FormResetter from './FormResetter';

const validationSchema = Yup.object().shape({
  jobFrom: Yup.object().required('Please select a city').nonNullable('Please select a city'),
  jobCompanyFrom: Yup.object()
    .required('Please select a company')
    .nonNullable('Please select a company'),
  jobTo: Yup.object().required('Please select a city').nonNullable('Please select a city'),
  jobCompanyTo: Yup.object()
    .required('Please select a company')
    .nonNullable('Please select a company'),
  jobCargo: Yup.object().required('Please select a cargo').nonNullable('Please select a cargo'),
});

const JobForm = () => {
  const [urgency, setUrgency] = useState<Urgency>('Standard');
  const { gameData, isLoading } = useGameData();

  const { cities, cargoes } = gameData || {};

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

          <JobFromCity cities={cities} loading={isLoading} />
          <JobFromCompany companies={values?.jobFrom?.companies} />

          <JobToCity cities={cities} loading={isLoading} />
          <JobToCompany companies={values?.jobTo?.companies} />

          <JobCargo cargoes={cargoes} loading={isLoading} />

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
