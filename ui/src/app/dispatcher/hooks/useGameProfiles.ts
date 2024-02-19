import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GameProfile } from '@core/types';
import getGameProfiles from '../api/getGameProfiles';

export type UseGameProfilesResult = Omit<UseQueryResult<GameProfile[], any>, 'data'> & {
  profiles?: GameProfile[];
};

const QUERY_KEY = 'useGameProfiles';

function useGameProfiles(): UseGameProfilesResult {
  const { data: profiles, ...rest } = useQuery({
    queryFn: () => getGameProfiles(),
    queryKey: [QUERY_KEY],
    select: (data) => data.sort((l, r) => l.gameName.localeCompare(r.gameName)),
  });

  return { profiles, ...rest };
}

export default useGameProfiles;
