import React from 'react';
import Box from '@mui/material/Box';
import articulated from '@assets/img/articulated.png';

const JobFlagsDisplay = () => (
  <Box className="TsdJobListItem-contentJobFlags">
    <img src={articulated} alt="articulated" />
    <img src={articulated} alt="articulated" />
    {/* <img src={articulated} alt="articulated" />
      <img src={articulated} alt="articulated" />
      <img src={articulated} alt="articulated" />
      <img src={articulated} alt="articulated" /> */}
  </Box>
);

export default JobFlagsDisplay;
