export type GameStatus = 'noProfilesFound' | 'available';

export default interface Game {
  readonly status: GameStatus;
  readonly remotePath: string;
  readonly localPath: string;
  readonly exePath: string;
}
