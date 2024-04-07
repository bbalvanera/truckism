import { join as joinPath } from 'node:path';
import { AvailableGames, SteamClientStatus } from 'truckism-types';
import { existsdir } from '@common/utils';
import getGameInfo from './getGameInfo';
import getLoginUser from './getLoginUser';
import getSteamInstallPath from './getSteamInstallPath';
import getUserDirectory from './getUserDirectory';

function availableGames(status: SteamClientStatus): AvailableGames {
  return {
    status,
    ets2: { status: 'noProfilesFound', remotePath: '', localPath: '', exePath: '' },
    ats: { status: 'noProfilesFound', remotePath: '', localPath: '', exePath: '' },
  };
}

async function getGames(): Promise<AvailableGames> {
  const steamInstallPath = await getSteamInstallPath();
  if (steamInstallPath === null) {
    return availableGames('steamNotInstalled');
  }

  const userData = joinPath(steamInstallPath, 'userdata');
  if (!existsdir(userData)) {
    return availableGames('steamNotInstalled');
  }

  const personaName = getLoginUser(steamInstallPath);
  if (personaName === null) {
    return availableGames('noLoginUser');
  }

  const userDir = getUserDirectory(steamInstallPath, personaName);
  if (userDir === null) {
    return availableGames('noLoginUser');
  }

  const retVal = availableGames('installed');
  retVal.ats = getGameInfo('ats', userDir);
  retVal.ets2 = getGameInfo('ets2', userDir);

  return retVal;
}

export default getGames;
