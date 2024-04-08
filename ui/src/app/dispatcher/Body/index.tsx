import React from 'react';
import CenterCenterStack from '@components/CenterCenterStack';
import If from '@components/If';
import { useCurrentProfile } from '../hooks';
import Actions from './Actions';
import JobForm from './JobForm';
import JobGrid from './JobGrid';
import JobList from './JobList';
import useSx from './sx';

const Other = () => (
  <div>
    <CenterCenterStack>
      <h1>Profile not found</h1>
    </CenterCenterStack>
  </div>
);

const Body = () => {
  const sx = useSx();
  const [currentProfile] = useCurrentProfile();
  return (
    <If condition={currentProfile !== undefined} fallback={<Other />}>
      <JobGrid sx={sx}>
        <JobForm />
        <Actions />
        <JobList />
      </JobGrid>
    </If>
  );
};

export default Body;
