import React from 'react';
import Box from '@mui/material/Box';
import useSx from './sx';

const AdPlaceholder = () => {
  const sx = useSx();

  return (
    <Box className="TsdAdPlaceholder-root" sx={sx}>
      Hello world
    </Box>
  );
};

export default AdPlaceholder;
