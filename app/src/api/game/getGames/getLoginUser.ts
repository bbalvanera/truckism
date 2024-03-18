import { join as joinPath } from 'node:path';
import { fileexists } from '@common/utils';
import parseVdfFile, { FileReader, LoginUser } from '@modules/vdf-helper';

function getLoginUser(steamInstallPath: string): string | null {
  const configFile = joinPath(steamInstallPath, 'config', 'loginusers.vdf');

  if (!fileexists(configFile)) {
    return null;
  }

  const fr = new FileReader(configFile);
  const vdf = parseVdfFile(fr);

  if (!vdf) {
    return null;
  }

  const props = vdf.properties ?? {};
  const user = Object.keys(props)
    .map((k) => new LoginUser(props[k]))
    .find((user) => user.mostRecent);

  return user?.personaName ?? null;
}

export default getLoginUser;
