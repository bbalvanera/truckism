import { GameName } from 'truckism-types';

function getGameData(saveFile: string, game: GameName) {
  return truckismAPI.getGameData(saveFile, game);
}

export default getGameData;
