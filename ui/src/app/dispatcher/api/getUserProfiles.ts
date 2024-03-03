import { GameProfile } from '@core/types';

function getUserProfiles(): Promise<GameProfile[]> {
  return truckismAPI.getUserProfiles();
}

export default getUserProfiles;
