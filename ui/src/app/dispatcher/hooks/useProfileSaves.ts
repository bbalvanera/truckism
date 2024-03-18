import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { SaveSlot } from 'truckism-types';
import getProfileSaves from '../api/getProfileSaves';

export type UseProfileSavesResult = Omit<UseQueryResult<SaveSlot[], any>, 'data'> & {
  saves?: SaveSlot[];
};

const QUERY_KEY = 'useProfileSaves';

function useProfileSaves(profilePath: string): UseProfileSavesResult {
  const { data: saves, ...rest } = useQuery({
    queryFn: () => getProfileSaves(profilePath),
    queryKey: [QUERY_KEY, profilePath],
    enabled: profilePath.length > 0,
    select: (data) => {
      let retVal = data;

      if (data) {
        const quickSaveIndex = data.findIndex((save) => save.name === 'autosave');
        if (quickSaveIndex > -1) {
          const quickSave = data[quickSaveIndex];
          const newData = [...data.slice(0, quickSaveIndex), ...data.slice(quickSaveIndex + 1)];
          retVal = [quickSave, ...newData];
        }
      }

      return retVal;
    },
  });

  return { saves, ...rest };
}

export default useProfileSaves;
