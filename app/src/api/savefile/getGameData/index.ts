import { GameData, GameName } from 'truckism-types';
import { fileexists } from '@common/utils';
import { GameFile } from '@modules/sii-helper';

async function getGameData(savefilePath: string, game: GameName): Promise<GameData> {
  if (!fileexists(savefilePath)) {
    throw new Error('File does not exist');
  }

  const gameFile = new GameFile(savefilePath, game);
  await gameFile.load();

  const { cities, cargoes, lastVisitedCity } = gameFile;

  return {
    cities: cities.sort((a, b) => a.name.localeCompare(b.name)),
    cargoes: cargoes.sort((a, b) => a.name.localeCompare(b.name)),
    lastVisitedCity: lastVisitedCity,
  };
}

export default getGameData;
