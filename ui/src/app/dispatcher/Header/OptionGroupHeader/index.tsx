import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { GameName } from '@core/types';
import AtsIcon from '../AtsIcon';
import EtsIcon from '../EtsIcon';

export interface OptionGroupHeaderProps {
  gameName: GameName;
}

const OptionGroupHeader = ({ gameName }: OptionGroupHeaderProps) => (
  <ListItem>
    <ListItemIcon>{gameName === 'ats' ? <AtsIcon /> : <EtsIcon />}</ListItemIcon>
    <ListItemText>
      {gameName === 'ats' ? 'American Truck Simulator' : 'Euro Truck Simulator 2'}
    </ListItemText>
  </ListItem>
);

OptionGroupHeader.muiSkipListHighlight = true;

export default OptionGroupHeader;
