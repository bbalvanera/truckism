import React from 'react';
import HazmatClass from '@core/types/HazmatClass';
import Job from '@core/types/Job';
import JobFlags from '@core/types/JobFlags';
import Urgency from '@core/types/Urgency';
import JobItem from '../JobListItem';

const JobList = () => {
  const job: Job = {
    cargo: {
      name: 'Jet Engine Inlet Cowl',
      weight: 10000,
      hazmat: HazmatClass.None,
      flags: JobFlags.Articulated,
    },
    origin: {
      city: 'Wichita',
      state: 'KS',
      company: 'Boeing',
    },
    destination: {
      city: 'Beaumont',
      state: 'TX',
      company: 'ExxonMobil',
    },
    urgency: Urgency.Standard,
  };
  return (
    <>
      <JobItem job={job} />
      <JobItem job={job} />
    </>
  );
};

export default JobList;
