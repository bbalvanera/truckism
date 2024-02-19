import { GameProfile } from '@core/types';

async function getGameProfiles(): Promise<GameProfile[]> {
  return truckismAPI.getAllProfiles();
}

export default getGameProfiles;
