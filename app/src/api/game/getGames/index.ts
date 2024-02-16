import { app } from 'electron';
import { join as joinPath } from 'path';
import Registry from 'winreg';
import { Game } from '@common/types';
import { isNumeric, getDirectories, existsdir } from '@common/utils';

const noneAvailable: Game[] = [
  {
    name: 'ets2',
    available: false,
  },
  {
    name: 'ats',
    available: false,
  },
];

const GAMES = {
  ets2: {
    remotedir: '227300',
    localdir: 'Euro Truck Simulator 2',
    processName: 'eurotrucks2',
  },
  ats: {
    remotedir: '270880',
    localdir: 'American Truck Simulator',
    processName: 'amtrucks',
  },
};

function getSteamInstallPath(): Promise<string | null> {
  return new Promise((resolve) => {
    const regKey = new Registry({
      hive: Registry.HKLM,
      key: '\\SOFTWARE\\Valve\\Steam',
      arch: 'x86',
    });

    regKey.get('InstallPath', (err: any, item) => {
      if ((err || {}).code === 1) {
        resolve(null);
        return;
      } else {
        resolve(item.value);
      }
    });
  });
}

function getGameInfo(game: 'ets2' | 'ats', basePath: string): Game {
  const { remotedir, localdir } = GAMES[game];
  const mydocuments = app.getPath('documents');
  const retVal: Game = { name: game, available: false };
  const remotePath = joinPath(basePath, remotedir);

  if (!existsdir(remotePath)) {
    return retVal;
  }

  return {
    name: game,
    available: true,
    remotePath: joinPath(remotePath, 'remote', 'profiles'),
    localPath: joinPath(mydocuments, localdir, 'profiles'),
  };
}

async function getGames(): Promise<Game[]> {
  const steamInstallPath = await getSteamInstallPath();
  if (steamInstallPath === null) {
    return noneAvailable;
  }

  const userData = joinPath(steamInstallPath, 'userdata');
  if (!existsdir(userData)) {
    return noneAvailable;
  }

  const userDirs = getDirectories(userData).filter((userDir) => isNumeric(userDir.name));
  if (userDirs.length === 0) {
    return noneAvailable;
  }

  const retVal = [];
  const userPath = userDirs.at(0)?.path ?? '';
  retVal.push(getGameInfo('ets2', userPath));
  retVal.push(getGameInfo('ats', userPath));

  return retVal;
}

export default getGames;
