import React from 'react';
import Grid, { Grid2Props } from '@mui/material/Unstable_Grid2'; // Grid version 2

const GridRow = ({ children, ...props }: Grid2Props) => (
  <Grid {...props} container xs>
    {children}
  </Grid>
);

export default GridRow;
