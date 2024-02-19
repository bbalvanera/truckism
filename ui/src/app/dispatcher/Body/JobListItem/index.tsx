import React from 'react';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import example from '@assets/img/aport_pcc.png';
import Job from '@core/types/Job';
import JobFlagsDisplay from '../JobFlagsDisplay';
import JobGridCell from '../JobGridCell';

export interface JobListItemProps {
  job: Job;
}

const JobListItem = ({ job }: JobListItemProps) => {
  const cargoName = job.cargo.name;
  const origin = `${job.origin.city}, ${job.origin.state}`;
  const destination = `${job.destination.city}, ${job.destination.state}`;

  return (
    <JobGridCell align="fullWidth">
      <Card variant="outlined" className="TsdJobListItem-root">
        <CardContent className="TsdJobListItem-content">
          <img src={example} alt="example" height="32px" width="auto" />
          <Box className="TsdJobListItem-contentTypography">
            <Typography variant="h6" color="secondary" fontWeight="bold">
              {cargoName}
            </Typography>
            <Typography variant="h6" fontWeight="bold">
              {origin} &#x21FE; {destination}
            </Typography>
          </Box>
          <Box>
            <img src={example} alt="example" height="32px" width="auto" />
            <JobFlagsDisplay />
          </Box>
        </CardContent>
        <Box className="TsdJobListItem-deleteButton">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Card>
    </JobGridCell>
  );
};

export default JobListItem;
