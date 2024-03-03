import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GameProfile } from '@core/types';
import getUserProfiles from '../api/getUserProfiles';

export type UseUserProfilesResult = Omit<UseQueryResult<GameProfile[], any>, 'data'> & {
  profiles?: GameProfile[];
};

const QUERY_KEY = 'useUserProfiles';

function useUserProfiles(): UseUserProfilesResult {
  const { data: profiles, ...rest } = useQuery({
    queryFn: () => getUserProfiles(),
    queryKey: [QUERY_KEY],
    select: (data) => data.sort((l, r) => l.gameName.localeCompare(r.gameName)),
  });

  return { profiles, ...rest };
}

export default useUserProfiles;
