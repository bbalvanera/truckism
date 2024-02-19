import React from 'react';
import Actions from './Actions';
import JobForm from './JobForm';
import JobGrid from './JobGrid';
import JobList from './JobList';
import useSx from './sx';

const Body = () => {
  const sx = useSx();
  return (
    <JobGrid sx={sx}>
      <JobForm />
      <Actions />
      <JobList />
    </JobGrid>
  );
};

export default Body;
