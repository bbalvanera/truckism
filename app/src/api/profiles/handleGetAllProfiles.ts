import { GameProfile } from '@common/types';
import getAllProfiles from './getAllProfiles';

async function handleGetAllProfiles(): Promise<GameProfile[]> {
  return await getAllProfiles();
}

export default handleGetAllProfiles;
