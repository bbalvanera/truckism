import { GameName } from './GameName';

export default interface GameProfile {
  id: string;
  gameName: GameName;
  name: string;
  isRemote: boolean;
  path: string;
}
