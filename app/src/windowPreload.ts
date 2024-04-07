import api from './api/api';
import logging from './logging/api';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('truckismAPI', api);
contextBridge.exposeInMainWorld('loggingAPI', logging);
