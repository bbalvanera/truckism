import { SaveSlot } from 'truckism-types';
import { getDirectories, fileexists } from '@common/utils';
import { getSiiFileContents } from '@modules/sii-helper';

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
        return { name, infoPath, gamePath } as SaveSlot;
      }
    } else if (fileexists(infoPath)) {
      try {
        const infoFile = await getSiiFileContents(infoPath);
        const saveName = infoFile.find((line) => / name: /.test(line));
        if (saveName) {
          const matches = saveName.match(/ name: (.*)/);
          const nameMatch = (matches?.[1] || 'No Name').replace(/"/g, '');

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
