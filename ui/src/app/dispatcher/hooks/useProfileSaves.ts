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
  });

  return { saves, ...rest };
}

export default useProfileSaves;
