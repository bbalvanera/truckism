import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GameData } from 'truckism-types';
import getGameData from '../api/getGameData';
import useCurrentProfile, { CurrentProfile } from './useCurrentProfile';

export type UseGameDataResult = Omit<UseQueryResult<GameData, any>, 'data'> & {
  gameData?: GameData;
};

const QUERY_KEY = 'useGameData';

function useGameData(): UseGameDataResult {
  const [current] = useCurrentProfile();
  const { profile, save } = (current || {}) as CurrentProfile;
  const { data: gameData, ...rest } = useQuery({
    queryFn: () => getGameData(save?.gamePath, profile?.gameName),
    queryKey: [QUERY_KEY, save?.gamePath],
    enabled: !!current,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });

  return { gameData, ...rest };
}

export default useGameData;
