import React from 'react';
import { GameName } from 'truckism-types';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AtsIcon, Ets2Icon } from '@components/Icons';

export interface OptionGroupHeaderProps {
  gameName: GameName;
}

const OptionGroupHeader = ({ gameName }: OptionGroupHeaderProps) => (
  <ListItem>
    <ListItemIcon>
      {gameName === 'ats' ? <AtsIcon width={32} /> : <Ets2Icon width={32} />}
    </ListItemIcon>
    <ListItemText>
      {gameName === 'ats' ? 'American Truck Simulator' : 'Euro Truck Simulator 2'}
    </ListItemText>
  </ListItem>
);

OptionGroupHeader.muiSkipListHighlight = true;

export default OptionGroupHeader;
