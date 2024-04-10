import React from 'react';
import { Cargo } from 'truckism-types';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import { VisitedCityIcon, NotVisitedCityIcon } from '@components/Icons';
import JobFlagsDisplay from '../JobFlagsDisplay';
import { JobFormAutocompleteOption } from '../JobFormAutocomplete';

function renderCargoOption(props: any, option: JobFormAutocompleteOption<Cargo>) {
  const cargo = option.value;
  const { localizedName } = cargo;

  return (
    <ListItem {...props} disablePadding sx={{ pr: 2 }}>
      <ListItemText sx={{ m: 0 }} primary={localizedName} />
      <JobFlagsDisplay {...cargo} width={32} />
      {/* <ListItemIcon sx={{ minWidth: '36px' }}>
        {visited ? <VisitedCityIcon width={20} /> : <NotVisitedCityIcon width={20} />}
      </ListItemIcon> */}
      {/* <Typography variant="body2" color="text.disabled">
        {countryLocalizedName}
      </Typography> */}
    </ListItem>
  );
}

export default renderCargoOption;
