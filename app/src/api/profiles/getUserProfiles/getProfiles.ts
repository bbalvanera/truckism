import { GameName, GameProfile } from 'truckism-types';
import { getDirectories, hexToString } from '@common/utils';

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

export default getProfiles;
