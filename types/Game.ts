export type GameStatus = 'steamNotInstalled' | 'noLoginUser' | 'noProfilesFound' | 'available';
export default interface Game {
  readonly status: GameStatus;
  readonly remotePath: string;
  readonly localPath: string;
  readonly exePath: string;
}
