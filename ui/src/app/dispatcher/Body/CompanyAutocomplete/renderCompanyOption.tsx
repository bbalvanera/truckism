import React from 'react';
import { Company } from 'truckism-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { VisitedCityIcon } from '@components/Icons';
import { JobFormAutocompleteOption } from '../JobFormAutocomplete';

function renderCompanyOption(props: any, option: JobFormAutocompleteOption<Company>) {
  const { name, suffix } = option.value;

  return (
    <ListItem {...props} disablePadding sx={{ pr: 2 }}>
      <ListItemIcon sx={{ minWidth: '36px' }}>
        <VisitedCityIcon />
      </ListItemIcon>
      <ListItemText sx={{ m: 0 }} primary={name} />
      <Typography variant="body2" color="text.disabled">
        {suffix}
      </Typography>
    </ListItem>
  );
}

export default renderCompanyOption;
