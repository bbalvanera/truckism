import Game from './Game';

export type SteamClientStatus = 'steamNotInstalled' | 'noLoginUser' | 'installed';

export default interface AvailableGames {
  status: SteamClientStatus;
  ets2: Game;
  ats: Game;
}
