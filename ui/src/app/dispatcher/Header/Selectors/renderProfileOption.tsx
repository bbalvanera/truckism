import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { GameProfile } from '@core/types';

function renderOption({ id, name, isRemote }: GameProfile) {
  return (
    <MenuItem key={id} value={id}>
      <ListItemText primary={name} />
      <Typography variant="body2" color="text.secondary">
        {isRemote ? 'Remote' : 'Local'}
      </Typography>
    </MenuItem>
  );
}

export default renderOption;
