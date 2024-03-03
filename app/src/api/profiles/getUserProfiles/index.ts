import { GameName, GameProfile } from '@common/types';
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

async function getUserProfiles(): Promise<GameProfile[]> {
  const games = await getGames();

  const availableGames = games.filter((g) => g.available);
  const profiles: GameProfile[] = [];

  for (const game of availableGames) {
    const { name, remotePath, localPath } = game;
    if (existsdir(remotePath ?? '')) {
      const remoteProfiles = getProfiles({
        gameName: name,
        location: remotePath,
        isRemote: true,
      });

      profiles.push(...remoteProfiles);
    }

    if (existsdir(localPath ?? '')) {
      const localProfiles = getProfiles({
        gameName: name,
        location: localPath,
        isRemote: false,
      });

      profiles.push(...localProfiles);
    }
  }

  return profiles;
}

export default getUserProfiles;
