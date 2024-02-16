import fs from 'fs';
import { join as joinPath } from 'path';

function getDirectories(path: string) {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({ name: entry.name, path: joinPath(path, entry.name) }));
}

function existsdir(path: string) {
  return fs.existsSync(path);
}

export { existsdir, getDirectories };
