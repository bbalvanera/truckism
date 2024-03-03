import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { GameProfile } from '@core/types';
import OptionGroupHeader from '../OptionGroupHeader';
import renderProfileOption from './renderProfileOption';

const noProfilesFound = [
  <MenuItem key="notfound" disabled>
    <Typography fontStyle="italic">No profiles found</Typography>
  </MenuItem>,
];

function renderOptions(profiles: GameProfile[]): JSX.Element[] {
  if (profiles.length === 0) {
    return noProfilesFound;
  }

  return profiles.map(renderProfileOption);
}

function renderProfileOptions(profiles: GameProfile[] = []): JSX.Element[] {
  if (profiles.length === 0) {
    return noProfilesFound;
  }

  const atsProfs = profiles.filter(({ gameName }) => gameName === 'ats');
  const ets2Profs = profiles.filter(({ gameName }) => gameName === 'ets2');

  return [
    <OptionGroupHeader key="ats" gameName="ats" />,
    ...renderOptions(atsProfs),
    <OptionGroupHeader key="ets2" gameName="ets2" />,
    ...renderOptions(ets2Profs),
  ];
}

export default renderProfileOptions;
