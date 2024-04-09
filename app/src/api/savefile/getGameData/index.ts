import { Cargo, City, GameData, GameName } from 'truckism-types';
import { fileexists, toTitleCase } from '@common/utils';
import GameFile from '@modules/sii-helper/GameFile';

function fixCargoName(cargo: Cargo): Cargo {
  const name = cargo.name;

  cargo.name = toTitleCase(name);
  cargo.localizedName = toTitleCase(cargo.localizedName ?? cargo.name);

  return cargo;
}

function fixCity(city: City): City {
  city.name = toTitleCase(city.name);
  city.localizedName = toTitleCase(city.localizedName);

  return city;
}

async function getGameData(savefilePath: string, game: GameName): Promise<GameData> {
  if (!fileexists(savefilePath)) {
    throw new Error('File does not exist');
  }

  const gameFile = new GameFile(savefilePath, game);
  await gameFile.load();

  const { cities, cargoes, lastVisitedCity } = gameFile;

  return {
    cities: cities.map(fixCity).sort((a, b) => a.name.localeCompare(b.name)),
    cargoes: cargoes.map(fixCargoName).sort((a, b) => a.name.localeCompare(b.name)),
    lastVisitedCity: lastVisitedCity ? fixCity(lastVisitedCity) : null,
  };
}

export default getGameData;
