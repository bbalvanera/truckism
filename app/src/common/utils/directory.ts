import fs from 'node:fs';
import { join as joinPath } from 'node:path';

function getDirectories(path: string) {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({ name: entry.name, path: joinPath(path, entry.name) }));
}

function existsdir(path: string) {
  return fs.existsSync(path);
}

function fileexists(path: string) {
  return fs.existsSync(path);
}

function deletefile(path: string) {
  if (fileexists(path)) {
    fs.unlinkSync(path);
  }
}

export { existsdir, fileexists, deletefile, getDirectories };
