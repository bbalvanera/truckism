import { GameName } from 'truckism-types';

function getCities(saveFile: string, game: GameName) {
  console.log('calling getCititesFromSavefile at api level');
  return truckismAPI.getCitiesFromSavefile(saveFile, game);
}

export default getCities;
