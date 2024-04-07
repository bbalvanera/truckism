import { GameProfile } from 'truckism-types';
import getGames from '../../game/getGames';
import getGameProfiles from './getGameProfiles';

async function getUserProfiles(): Promise<GameProfile[]> {
  const games = await getGames();
  const profiles: GameProfile[] = [];

  const gameNames: ['ats', 'ets2'] = ['ats', 'ets2'];
  for (const g of gameNames) {
    const { remotePath, localPath, status } = games[g];

    if (status === 'available') {
      profiles.push(...getGameProfiles(g, remotePath, localPath));
    }
  }

  return profiles;
}

export default getUserProfiles;
