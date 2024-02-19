import api from './api';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('truckismAPI', api);
