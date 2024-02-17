import React, { PropsWithChildren } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

export type JobGridCellProps = {
  align: 'left' | 'right' | 'fullWidth';
} & BoxProps;

const JobGridCell = ({
  children,
  align,
  className,
  ...boxProps
}: PropsWithChildren<JobGridCellProps>) => (
  <Box className={`${className} ${align}`} {...boxProps}>
    {children}
  </Box>
);

export default JobGridCell;
