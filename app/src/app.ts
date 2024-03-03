import { app, ipcMain } from 'electron';
import { channels } from './api';
import getGames from './api/game/getGames';
import getProfileSaves from './api/profiles/getProfileSaves';
import getUserProfiles from './api/profiles/getUserProfiles';
import createWindow from './createWindow';

function registerHandlers() {
  ipcMain.handle(channels.games.getGames, getGames);
  ipcMain.handle(channels.profiles.getUserProfiles, getUserProfiles);
  ipcMain.handle(channels.profiles.getProfileSaves, (e, ...args) => getProfileSaves(args[0]));
}

async function run() {
  if (require('electron-squirrel-startup')) {
    app.quit();
  }

  app.whenReady().then(() => {
    registerHandlers();
    createWindow();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    createWindow();
  });
}

const thisApp = { run };
export default thisApp;
