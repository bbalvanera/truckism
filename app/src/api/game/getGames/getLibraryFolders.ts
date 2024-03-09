import { join as joinPath } from 'node:path';
import { fileexists } from '@common/utils';
import parseVdfFile, { FileReader, LibraryFolder } from '@modules/vdf-helper';

function getLibraryFolders(steamInstallPath: string): LibraryFolder[] {
  const configFile = joinPath(steamInstallPath, 'steamapps', 'libraryfolders.vdf');

  if (!fileexists(configFile)) {
    return [];
  }

  const fr = new FileReader(configFile);
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
