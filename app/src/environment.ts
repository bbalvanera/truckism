// eslint-disable-next-line @typescript-eslint/no-var-requires
const isDev = require('electron-is-dev').default;

export const production = !isDev;
export const development = isDev;
export const extras = isDev ? '../../src/extras' : 'extras';
