import VdfEntry from './VdfEntry';
import VdfFile from './VdfFile';

export default class LibraryFolder extends VdfEntry {
  constructor(vdfFile: VdfFile) {
    super(vdfFile);
  }

  get path(): string | undefined {
    const props = this.vdfFile.properties;
    return props?.['path']?.value;
  }

  containsApp(appId: string): boolean {
    const apps = this.vdfFile.properties?.apps;
    return !!apps && !!apps.properties?.[appId];
  }
}
