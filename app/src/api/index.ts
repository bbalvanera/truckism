import { ipcRenderer } from 'electron';
import { AvailableGames, GameProfile, SaveSlot } from 'truckism-types';

const channels = {
  games: {
    getGames: 'game:getGames',
  },
  profiles: {
    getUserProfiles: 'profiles:getUserProfiles',
    getProfileSaves: 'profiles:getProfileSaves',
  },
};

const api = {
  getGames: () => ipcRenderer.invoke(channels.games.getGames) as Promise<AvailableGames>,
  getUserProfiles: () =>
    ipcRenderer.invoke(channels.profiles.getUserProfiles) as Promise<GameProfile[]>,
  getProfileSaves: (profilePath: string) =>
    ipcRenderer.invoke(channels.profiles.getProfileSaves, profilePath) as Promise<SaveSlot[]>,
};

export default api;

export { channels };
