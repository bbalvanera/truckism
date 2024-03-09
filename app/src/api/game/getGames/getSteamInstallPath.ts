import Registry from 'winreg';

function getSteamInstallPath(): Promise<string | null> {
  return new Promise((resolve, reject) => {
    const regKey = new Registry({
      hive: Registry.HKLM,
      key: '\\SOFTWARE\\Valve\\Steam',
      arch: 'x86',
    });

    regKey.get('InstallPath', (err: any, item) => {
      if (item?.value) {
        resolve(item.value);
      } else if ((err || {}).code === 1) {
        resolve(null);
      } else {
        reject(err);
      }
    });
  });
}

export default getSteamInstallPath;
