import api from './api';
import logging from './logging';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('truckismAPI', api);
contextBridge.exposeInMainWorld('loggingAPI', logging);
