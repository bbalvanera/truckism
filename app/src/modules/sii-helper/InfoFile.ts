import SCSFileReader, { EndProcessFn } from './SCSFileReader';

const NAME_REGEX = /^\s*name:\s*"*(?<name>[^"]*)"*$/;

export default class InfoFile extends SCSFileReader {
  #name: string | null = null;

  constructor(infoFilePath: string) {
    super(infoFilePath);
  }

  async getName(): Promise<string | null> {
    if (!this.loaded) {
      await this.loadFile();
    }

    return this.#name;
  }

  protected processLine(line: string, end: EndProcessFn): void {
    const match = line.match(NAME_REGEX);
    if (match) {
      this.#name = match.groups?.name || 'No Name';
      end();
    }
  }
}
