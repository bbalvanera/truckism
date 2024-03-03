import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { GameProfile } from '@core/types';
import AtsIcon from '../AtsIcon';
import EtsIcon from '../EtsIcon';

function renderProfileValue(profile: GameProfile) {
  return (
    <ListItem disablePadding component="div" sx={{ pr: 2 }}>
      <ListItemIcon sx={{ minWidth: '36px' }}>
        {profile.gameName === 'ats' ? <AtsIcon /> : <EtsIcon />}
      </ListItemIcon>
      <ListItemText sx={{ m: 0 }} primary={profile.name} />
      <Typography variant="body2">{profile.isRemote ? 'Remote' : 'Local'}</Typography>
    </ListItem>
  );
}

export default renderProfileValue;
