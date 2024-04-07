import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import If from '@components/If';
import { useCurrentProfile } from '../hooks';
import ActionButtons from './ActionButtons';
import useSx from './sx';

const Subheader = () => {
  const sx = useSx();
  const [current] = useCurrentProfile();
  const { profile, save } = current ?? {};

  return (
    <Grid container sx={sx}>
      <Grid xs={8}>
        <Typography variant="h6">{profile?.name}</Typography>
        <Typography variant="body2">{save?.name}</Typography>
      </Grid>
      <Grid xs={4}>
        <If condition={current !== undefined}>
          <ActionButtons />
        </If>
      </Grid>
    </Grid>
  );
};

export default Subheader;
