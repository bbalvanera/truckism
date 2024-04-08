import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { City } from 'truckism-types';
import getCities from '../api/getCities';
import useCurrentProfile, { CurrentProfile } from './useCurrentProfile';

export type UseUserProfilesResult = Omit<UseQueryResult<City[], any>, 'data'> & {
  cities?: City[];
};

const QUERY_KEY = 'useCities';

function useCities(): UseUserProfilesResult {
  const [current] = useCurrentProfile();
  const { profile, save } = (current || {}) as CurrentProfile;
  const { data: cities, ...rest } = useQuery({
    queryFn: () => getCities(save?.gamePath, profile?.gameName),
    queryKey: [QUERY_KEY, save?.gamePath],
    enabled: !!current,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  return { cities, ...rest };
}

export default useCities;
