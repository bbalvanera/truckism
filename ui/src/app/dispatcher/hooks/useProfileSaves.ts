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
        const autosaveIdx = data.findIndex((save) => save.name?.toLowerCase() === 'autosave');
        if (autosaveIdx > -1) {
          const autosave = data[autosaveIdx];
          const newData = [...data.slice(0, autosaveIdx), ...data.slice(autosaveIdx + 1)];
          retVal = [autosave, ...newData];
        }
      }

      return retVal;
    },
  });

  return { saves, ...rest };
}

export default useProfileSaves;
