import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { AvailableGames } from 'truckism-types';
import getGames from '../api/getGames';

export type UseAvailableGamesResult = Omit<UseQueryResult<AvailableGames, any>, 'data'> & {
  games?: AvailableGames;
};

const QUERY_KEY = 'useAvailableGames';

function useAvailableGames(): UseAvailableGamesResult {
  const { data: games, ...rest } = useQuery({
    queryFn: () => getGames(),
    queryKey: [QUERY_KEY],
  });

  return { games, ...rest };
}

export default useAvailableGames;
