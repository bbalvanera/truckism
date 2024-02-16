import { GameName } from './GameName';

export default interface Game {
  readonly name: GameName;
  readonly available: boolean;
  readonly remotePath?: string | null;
  readonly localPath?: string | null;
}
