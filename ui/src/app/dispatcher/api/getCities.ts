import { GameName } from 'truckism-types';

function getCities(saveFile: string, game: GameName) {
  return truckismAPI.getCitiesFromSavefile(saveFile, game);
}

export default getCities;
