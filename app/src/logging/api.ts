import { ipcRenderer } from 'electron';
import ipcChannel from './ipcChannel';
import type { LoggingArgs } from './handleLogging';

const logging = {
  trace: (logargs: LoggingArgs) => ipcRenderer.send(ipcChannel, { level: 'trace', args: logargs }),
  debug: (logargs: LoggingArgs) => ipcRenderer.send(ipcChannel, { level: 'debug', args: logargs }),
  info: (logargs: LoggingArgs) => ipcRenderer.send(ipcChannel, { level: 'info', args: logargs }),
  warn: (logargs: LoggingArgs) => ipcRenderer.send(ipcChannel, { level: 'warn', args: logargs }),
  error: (logargs: LoggingArgs) => ipcRenderer.send(ipcChannel, { level: 'error', args: logargs }),
  fatal: (logargs: LoggingArgs) => ipcRenderer.send(ipcChannel, { level: 'fatal', args: logargs }),
};

export default logging;
