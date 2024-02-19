import getGames from '@api/game/getGames';
import { GameName, GameProfile } from '@common/types';
import { existsdir, getDirectories } from '@common/utils';

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

async function getAllProfiles(): Promise<GameProfile[]> {
  const games = await getGames();
  const availableGames = games.filter((g) => g.available);
  const profiles: GameProfile[] = [];

  for (const game of availableGames) {
    if (existsdir(game.remotePath ?? '')) {
      const remoteProfiles = getProfiles({
        gameName: game.name,
        location: game.remotePath,
        isRemote: true,
      });

      profiles.push(...remoteProfiles);
    }

    if (existsdir(game.localPath ?? '')) {
      const localProfiles = getProfiles({
        gameName: game.name,
        location: game.localPath,
        isRemote: false,
      });

      profiles.push(...localProfiles);
    }
  }

  return profiles;
}

export default getAllProfiles;
