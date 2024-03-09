import VdfFile from './VdfFile';

export default abstract class VdfEntry {
  protected vdfFile: VdfFile;

  constructor(vdfFile: VdfFile) {
    if (!vdfFile) {
      throw new Error('vdfFile is required');
    }

    this.vdfFile = vdfFile;
  }

  get key(): string {
    return this.vdfFile.key;
  }

  get value(): string | undefined {
    return this.vdfFile.value;
  }

  get properties(): { [key: string]: VdfFile } | undefined {
    return this.vdfFile.properties;
  }
}
