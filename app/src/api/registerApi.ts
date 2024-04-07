import { ipcMain } from 'electron';
import channels from './channels';
import getGames from './game/getGames';
import getProfileSaves from './profiles/getProfileSaves';
import getUserProfiles from './profiles/getUserProfiles';
import getCitiesFromSavefile from './savefile/getCitiesFromSavefile';

const handleGetProfileSaves = (e: any, ...args: any[]) => getProfileSaves(args[0]);
const handleGetCitiesFromSavefile = (e: any, ...args: any[]) =>
  getCitiesFromSavefile(args[0], args[1]);

export default function registerApi() {
  ipcMain.handle(channels.games.getGames, getGames);
  ipcMain.handle(channels.profiles.getUserProfiles, getUserProfiles);
  ipcMain.handle(channels.profiles.getProfileSaves, handleGetProfileSaves);
  ipcMain.handle(channels.savefile.getCitiesFromSavefile, handleGetCitiesFromSavefile);
}
