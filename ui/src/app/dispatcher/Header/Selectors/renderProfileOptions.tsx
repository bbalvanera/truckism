import React from 'react';
import { AvailableGames, GameProfile, GameStatus, SteamClientStatus } from 'truckism-types';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import i18n from '../../../../i18n';
import OptionGroupHeader from '../OptionGroupHeader';
import renderProfileOption from './renderProfileOption';

const noAvailableReasons = {
  steamNotInstalled: 'dispatcher.profileSelect-steamNotInstalled',
  noLoginUser: 'dispatcher.profileSelect-noLoginUser',
  noProfilesFound: 'dispatcher.profileSelect-noProfilesFound',
};

type NoAvailableOptionsReasons = Exclude<SteamClientStatus | GameStatus, 'installed' | 'available'>;

function noAvailableOptions(reason: NoAvailableOptionsReasons = 'noProfilesFound') {
  const reasonMessage = i18n.t(noAvailableReasons[reason]);
  return [
    <MenuItem key="reason" disabled>
      <Typography fontStyle="italic">{reasonMessage}</Typography>
    </MenuItem>,
  ];
}

function renderOptions(profiles: GameProfile[]): JSX.Element[] {
  if (profiles.length === 0) {
    return noAvailableOptions();
  }

  return profiles.map(renderProfileOption);
}

function renderProfileOptions(
  availableGames: AvailableGames,
  profiles: GameProfile[] = [],
): JSX.Element[] {
  if (availableGames.status !== 'installed') {
    return noAvailableOptions(availableGames.status);
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
