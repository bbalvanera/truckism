import { GameName } from './GameName';

export default interface GameProfile {
  gameName: GameName;
  name: string;
  isRemote: boolean;
  path: string;
}
