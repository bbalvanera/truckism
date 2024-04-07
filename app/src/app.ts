import { app } from 'electron';
import { registerApi } from './api';
import createWindow from './createWindow';
import { registerLogging, logger } from './logging';

function registerHandlers() {
  registerApi();
}

async function run() {
  logger.info('App starting...');

  if (require('electron-squirrel-startup')) {
    app.quit();
  }

  app.whenReady().then(() => {
    registerHandlers();
    registerLogging();
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
