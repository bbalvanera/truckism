import { BrowserWindow } from 'electron';
import { join as joinPath } from 'path';

// declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let win: BrowserWindow | null = null;
async function createWindow() {
  if (win !== null) {
    return;
  }

  const isDev = (await import('electron-is-dev')).default;

  win = new BrowserWindow({
    width: 1181,
    height: 890,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  win.loadURL(
    isDev ? 'http://localhost:3000' : `file://${joinPath(__dirname, '../build/index.html')}`,
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }

  win.setMenu(null);
  win.on('closed', () => {
    win = null;
  });
}

export default createWindow;
