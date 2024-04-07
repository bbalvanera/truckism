import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { City } from 'truckism-types';
import getCities from '../api/getCities';
import useCurrentProfile, { CurrentProfile } from './useCurrentProfile';

export type UseUserProfilesResult = Omit<UseQueryResult<Map<string, City>, any>, 'data'> & {
  cities?: Map<string, City>;
};

const QUERY_KEY = 'useCities';

function useCities(): UseUserProfilesResult {
  const [current] = useCurrentProfile();
  const { profile, save } = (current || {}) as CurrentProfile;
  const { data: cities, ...rest } = useQuery({
    queryFn: () => getCities(save?.gamePath, profile?.gameName),
    queryKey: [QUERY_KEY, save?.gamePath],
    // select: (data) => data.sort((l, r) => l.gameName.localeCompare(r.gameName)),
    enabled: !!current,
  });

  return { cities, ...rest };
}

export default useCities;
