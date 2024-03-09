import React from 'react';
import { AvailableGames, GameProfile } from 'truckism-types';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
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

function renderProfileOptions(
  availableGames?: AvailableGames,
  profiles: GameProfile[] = [],
): JSX.Element[] {
  if (profiles.length === 0) {
    return noProfilesFound;
  }

  const retVal = [];

  if (availableGames?.ats.status === 'available') {
    const atsProfs = profiles.filter(({ gameName }) => gameName === 'ats');

    retVal.push(<OptionGroupHeader key="ats" gameName="ats" />);
    retVal.push(...renderOptions(atsProfs));
  }

  if (availableGames?.ets2.status === 'available') {
    const ets2Profs = profiles.filter(({ gameName }) => gameName === 'ets2');

    retVal.push(<OptionGroupHeader key="ets2" gameName="ets2" />);
    retVal.push(...renderOptions(ets2Profs));
  }

  return retVal;
}

export default renderProfileOptions;
