import { join as joinPath } from 'node:path';
import { fileexists } from '@common/utils';
import parseVdfFile, { FileReader, LibraryFolder } from '@modules/vdf-helper';

function getLibraryFolders(steamInstallPath: string): LibraryFolder[] {
  const libFoldersFile = joinPath(steamInstallPath, 'steamapps', 'libraryfolders.vdf');

  if (!fileexists(libFoldersFile)) {
    return [];
  }

  const fr = new FileReader(libFoldersFile);
  const vdf = parseVdfFile(fr);

  if (!vdf) {
    return [];
  }

  const props = vdf.properties ?? {};
  // prettier-ignore
  return Object
    .keys(props)
    .map((k) => new LibraryFolder(props[k]));
}

export default getLibraryFolders;
