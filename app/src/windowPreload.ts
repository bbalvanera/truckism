// eslint-disable-next-line @typescript-eslint/no-var-requires
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('trucksimAPI', {
  getGames: () => ipcRenderer.invoke('game:getGames'),
  getAllProfiles: () => ipcRenderer.invoke('profiles:getAllProfiles'),
});
