import { ipcRenderer } from 'electron';
import { AvailableGames, GameData, GameName, GameProfile, SaveSlot } from 'truckism-types';
import channels from './channels';

const api = {
  getGames: () => ipcRenderer.invoke(channels.games.getGames) as Promise<AvailableGames>,
  getUserProfiles: () =>
    ipcRenderer.invoke(channels.profiles.getUserProfiles) as Promise<GameProfile[]>,
  getProfileSaves: (profilePath: string) =>
    ipcRenderer.invoke(channels.profiles.getProfileSaves, profilePath) as Promise<SaveSlot[]>,
  getGameData: (savePath: string, game: GameName) =>
    ipcRenderer.invoke(channels.savefile.getGameData, savePath, game) as Promise<GameData>,
};

export default api;
