// using steamInstallPath and personaName, iterate through the user directories
// until the personaName is found inside the directory's localconfig.vdf file
// so, the localconfig.vdf file needs to be read for each  existing user directory
import { join as joinPath } from 'node:path';
import { fileexists, getDirectories, isNumeric } from '@common/utils';
import parseVdfFile, { FileReader, LoginUser } from '@modules/vdf-helper';

function findUserDir(personaName: string): (value: { name: string; path: string }) => boolean {
  return (userDir) => {
    const localConfig = joinPath(userDir.path, 'config', 'localconfig.vdf');

    if (!fileexists(localConfig)) {
      return false;
    }

    const fr = new FileReader(localConfig);
    const vdf = parseVdfFile(fr);

    if (!vdf) {
      return false;
    }

    const props = vdf.properties ?? {};
    const user = Object.keys(props)
      .map((k) => new LoginUser(props[k]))
      .find((user) => user.personaName === personaName);

    return user !== undefined;
  };
}

function getUserDirectory(steamInstallPath: string, personaName: string): string | null {
  const userData = joinPath(steamInstallPath, 'userdata');
  const userDirs = getDirectories(userData).filter((userDir) => isNumeric(userDir.name));
  const userDir = userDirs.find(findUserDir(personaName));

  return userDir?.path ?? null;
}

export default getUserDirectory;
