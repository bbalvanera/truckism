import React from 'react';
import { GameProfile } from 'truckism-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { AtsIcon, Ets2Icon } from '@components/Icons';

function renderProfileValue(profile: GameProfile) {
  return (
    <ListItem disablePadding component="div" sx={{ pr: 2 }}>
      <ListItemIcon sx={{ minWidth: '36px' }}>
        {profile.gameName === 'ats' ? <AtsIcon width={24} /> : <Ets2Icon width={24} />}
      </ListItemIcon>
      <ListItemText sx={{ m: 0 }} primary={profile.name} />
      <Typography variant="body2">{profile.isRemote ? 'Remote' : 'Local'}</Typography>
    </ListItem>
  );
}

export default renderProfileValue;
