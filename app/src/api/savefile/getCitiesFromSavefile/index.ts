import { City, GameName } from 'truckism-types';
import { fileexists, toProperCase } from '@common/utils';
import GameFile from '@modules/sii-helper/GameFile';

function fixCity(city: City): City {
  let fixed = city.localizedName || city.name;
  fixed = fixed.replace(/_/g, ' ');
  fixed = toProperCase(fixed);
  return { ...city, localizedName: fixed };
}

async function getCitiesFromSavefile(savefilePath: string, game: GameName): Promise<City[]> {
  if (!fileexists(savefilePath)) {
    throw new Error('File does not exist');
  }

  const gameFile = new GameFile(savefilePath, game);
  let retVal = await gameFile.getCities();

  retVal = retVal.map(fixCity);
  retVal.sort((l, r) => l.localizedName.localeCompare(r.localizedName));

  return retVal;
}

export default getCitiesFromSavefile;
