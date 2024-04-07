import { ipcMain } from 'electron';
import handleLogging from './handleLogging';

const ipcChannel = 'logging';

export default function registerLogging() {
  ipcMain.on(ipcChannel, (e, args) => handleLogging(args));
}
