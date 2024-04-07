import { SaveSlot } from 'truckism-types';
import { getDirectories, fileexists, toProperCase } from '@common/utils';
import { getSiiFile } from '@modules/sii-helper';

const defaults = ['autosave', 'multiplayer_backup', 'quicksave'];

async function getProfileSaves(profilePath: string): Promise<SaveSlot[]> {
  const savedirs = getDirectories(profilePath + '/save');

  if (savedirs.length === 0) {
    return [];
  }

  const saves = savedirs.map(async (save) => {
    const { name, path } = save;
    const infoPath = `${path}\\info.sii`;
    const gamePath = `${path}\\game.sii`;

    if (defaults.some((d) => name.startsWith(d))) {
      // Check that both info.sii and game.sii exist
      // to declare this as a valid save
      if (fileexists(infoPath) && fileexists(gamePath)) {
        return { name: toProperCase(name), infoPath, gamePath } as SaveSlot;
      }
    } else if (fileexists(infoPath)) {
      try {
        const infoFile = await getSiiFile(infoPath);
        const saveName = infoFile.find((line) => / name: /.test(line));
        if (saveName) {
          const matches = saveName.match(/ name: (?<name>.*)/);
          const nameMatch = (matches?.groups?.name || 'No Name').replace(/"/g, '');

          return { name: nameMatch, infoPath, gamePath };
        }
      } catch (e) {
        console.error('Error getting info file', e);
      }
    }

    return null;
  });

  // prettier-ignore
  return (await Promise.all(saves))
    .filter((s) => s !== null) as SaveSlot[];
}

export default getProfileSaves;
