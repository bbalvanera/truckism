import { SaveSlot } from '@core/types';

function getProfileSaves(profilePath: string): Promise<SaveSlot[]> {
  return truckismAPI.getProfileSaves(profilePath);
}

export default getProfileSaves;
