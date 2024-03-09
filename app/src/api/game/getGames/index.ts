import { join as joinPath } from 'node:path';
import { AvailableGames, GameStatus } from 'truckism-types';
import { existsdir } from '@common/utils';
import getGameInfo from './getGameInfo';
import getLogingUser from './getLogingUser';
import getSteamInstallPath from './getSteamInstallPath';
import getUserDirectory from './getUserDirectory';

function noneAvailable(reason: GameStatus): AvailableGames {
  return {
    ets2: { status: reason, remotePath: '', localPath: '', exePath: '' },
    ats: { status: reason, remotePath: '', localPath: '', exePath: '' },
  };
}

async function getGames(): Promise<AvailableGames> {
  const steamInstallPath = await getSteamInstallPath();
  if (steamInstallPath === null) {
    return noneAvailable('steamNotInstalled');
  }

  const userData = joinPath(steamInstallPath, 'userdata');
  if (!existsdir(userData)) {
    return noneAvailable('steamNotInstalled');
  }

  const personaName = getLogingUser(steamInstallPath);
  if (personaName === null) {
    return noneAvailable('noLoginUser');
  }

  const userDir = getUserDirectory(steamInstallPath, personaName);
  if (userDir === undefined) {
    return noneAvailable('noLoginUser');
  }

  const retVal = noneAvailable('noLoginUser');
  retVal.ats = getGameInfo('ats', userDir);
  retVal.ets2 = getGameInfo('ets2', userDir);

  return retVal;
}

export default getGames;
