import React from 'react';
import { City } from 'truckism-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { VisitedCityIcon, NotVisitedCityIcon } from '@components/Icons';
import { JobFormAutocompleteOption } from '../JobFormAutocomplete';

function renderCityOption(props: any, option: JobFormAutocompleteOption<City>) {
  const { visited, localizedName, countryLocalizedName } = option.value;

  return (
    <ListItem {...props} disablePadding sx={{ pr: 2 }}>
      <ListItemIcon sx={{ minWidth: '36px' }}>
        {visited ? <VisitedCityIcon width={20} /> : <NotVisitedCityIcon width={20} />}
      </ListItemIcon>
      <ListItemText sx={{ m: 0 }} primary={localizedName} />
      <Typography variant="body2" color="text.disabled">
        {countryLocalizedName}
      </Typography>
    </ListItem>
  );
}

export default renderCityOption;
