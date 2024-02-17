import React from 'react';
import Stack, { StackProps } from '@mui/material/Stack';

export type CenterCenterStackProps = StackProps;

const CenterCenterStack = ({ children, ...rest }: CenterCenterStackProps) => (
  <Stack
    className="EvoCenterCenterStack-root"
    sx={{ height: 1 }}
    justifyContent="center"
    alignItems="center"
    {...rest}
  >
    {children}
  </Stack>
);

export default CenterCenterStack;
