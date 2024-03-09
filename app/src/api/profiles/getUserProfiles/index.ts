import { GameName, GameProfile } from 'truckism-types';
import { existsdir, getDirectories } from '@common/utils';
import getGames from '../../game/getGames';

function hexToString(hex: string): string {
  return Buffer.from(hex, 'hex').toString('utf8');
}

function getProfiles({
  gameName,
  location,
  isRemote,
}: {
  gameName: GameName;
  location?: string | null;
  isRemote: boolean;
}): GameProfile[] {
  const profiles = [];
  const directories = getDirectories(location ?? '');

  for (const { name: dirname, path } of directories) {
    const name = hexToString(dirname);
    const profile = {
      id: path,
      gameName,
      name,
      path,
      isRemote,
    };

    profiles.push(profile);
  }

  return profiles;
}

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

async function getUserProfiles(): Promise<GameProfile[]> {
  const games = await getGames();
  const profiles: GameProfile[] = [];

  if (games.ats.status === 'available') {
    const { remotePath, localPath } = games.ats;
    profiles.push(...getGameProfiles('ats', remotePath, localPath));
  }

  if (games.ets2.status === 'available') {
    const { remotePath, localPath } = games.ets2;
    profiles.push(...getGameProfiles('ets2', remotePath, localPath));
  }

  return profiles;
}

export default getUserProfiles;
