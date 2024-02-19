import { app, ipcMain } from 'electron';
import handleGetGames from '@api/game/getGames/handleGetGames';
import handleGetAllProfiles from '@api/profiles/handleGetAllProfiles';
import createWindow from './createWindow';

function registerReqHandlers() {
  ipcMain.handle('game:getGames', handleGetGames);
  ipcMain.handle('profiles:getAllProfiles', handleGetAllProfiles);
}

async function run() {
  // Handle creating/removing shortcuts on Windows when installing/uninstalling.
  if (require('electron-squirrel-startup')) {
    app.quit();
  }

  app.whenReady().then(() => {
    registerReqHandlers();
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
