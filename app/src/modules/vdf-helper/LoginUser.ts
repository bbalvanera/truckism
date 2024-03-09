import VdfEntry from './VdfEntry';
import VdfFile from './VdfFile';

export default class LoginUser extends VdfEntry {
  constructor(vdfFile: VdfFile) {
    super(vdfFile);
  }

  get personaName(): string | undefined {
    const props = this.vdfFile.properties;
    return props?.['PersonaName']?.value;
  }

  get mostRecent(): boolean | undefined {
    const props = this.vdfFile.properties;

    if (!(props && props?.['MostRecent'])) {
      return undefined;
    }

    return props?.['MostRecent']?.value === '1';
  }
}
