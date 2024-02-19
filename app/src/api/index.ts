import { ipcRenderer } from 'electron';
import { Game, GameProfile } from '@common/types';

const api = {
  getGames: () => ipcRenderer.invoke('game:getGames') as Promise<Game[]>,
  getAllProfiles: () => ipcRenderer.invoke('profiles:getAllProfiles') as Promise<GameProfile[]>,
};

export default api;
