import { GameName, GameProfile } from 'truckism-types';
import { existsdir } from '@common/utils';
import getProfiles from './getProfiles';

function getGameProfiles(gameName: GameName, remotePath: string, localPath: string): GameProfile[] {
  const retVal: GameProfile[] = [];

  if (existsdir(remotePath)) {
    const remoteProfiles = getProfiles({
      gameName,
      location: remotePath,
      isRemote: true,
    });

    retVal.push(...remoteProfiles);
  }

  if (existsdir(localPath)) {
    const localProfiles = getProfiles({
      gameName,
      location: localPath,
      isRemote: false,
    });

    retVal.push(...localProfiles);
  }

  return retVal;
}

export default getGameProfiles;
