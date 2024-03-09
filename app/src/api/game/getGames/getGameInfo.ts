import { app } from 'electron';
import { join as joinPath } from 'node:path';
import { Game, GameName } from 'truckism-types';
import { existsdir } from '@common/utils';
import baseGameConfig from './baseGameConfig';

const emptyGame: Game = {
  status: 'noProfilesFound',
  remotePath: '',
  localPath: '',
  exePath: '',
};

function getGameInfo(game: GameName, userPath: string): Game {
  const { remotedir, localdir } = baseGameConfig[game];
  const myDocuments = app.getPath('documents');
  const retVal = emptyGame;
  const remotePath = joinPath(userPath, remotedir);
  const localPath = joinPath(myDocuments, localdir);

  if (!(existsdir(remotePath) || existsdir(localPath))) {
    return retVal;
  }

  return {
    status: 'available',
    remotePath: remotePath,
    localPath: localPath,
    exePath: joinPath(localPath, 'bin', 'win_x64', `${game}.exe`),
  };
}

export default getGameInfo;
