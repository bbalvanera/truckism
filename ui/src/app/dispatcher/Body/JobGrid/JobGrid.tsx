import React, { PropsWithChildren } from 'react';
import Paper from '@mui/material/Paper';
import SxDef from '@core/types/SxDef';

export interface JobGridProps {
  sx?: SxDef;
}

const JobGrid = ({ sx, children }: PropsWithChildren<JobGridProps>) => (
  <Paper variant="outlined" sx={sx}>
    {children}
  </Paper>
);

export default JobGrid;
