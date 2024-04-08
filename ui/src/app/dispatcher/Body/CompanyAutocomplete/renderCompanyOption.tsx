import React from 'react';
import { Company } from 'truckism-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { VisitedCityIcon } from '@components/Icons';

function renderCompanyOption(props: any, { name }: Company) {
  return (
    <ListItem {...props} disablePadding sx={{ pr: 2 }}>
      <ListItemIcon sx={{ minWidth: '36px' }}>
        <VisitedCityIcon />
      </ListItemIcon>
      <ListItemText sx={{ m: 0 }} primary={name} />
    </ListItem>
  );
}

export default renderCompanyOption;
