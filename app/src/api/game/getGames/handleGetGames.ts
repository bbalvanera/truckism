import { Game } from '@common/types';
import getGames from '.';

async function handleGetGames(): Promise<Game[]> {
  return await getGames();
}

export default handleGetGames;
