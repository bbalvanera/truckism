import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import ActionButtons from './ActionButtons';
import useSx from './sx';

export interface HeaderProps {
  profileName: string;
  savefileName: string;
}

const Subheader = ({ profileName, savefileName }: HeaderProps) => {
  const sx = useSx();

  return (
    <Grid container sx={sx}>
      <Grid xs={8}>
        <Typography variant="h6">{profileName}</Typography>
        <Typography variant="body2">{savefileName}</Typography>
      </Grid>
      <Grid xs={4}>
        <ActionButtons />
      </Grid>
    </Grid>
  );
};

export default Subheader;
