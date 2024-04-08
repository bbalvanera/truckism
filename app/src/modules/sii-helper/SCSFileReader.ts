import readline from 'node:readline';
import { deletefile, fileexists, openFileStream } from '@common/utils';
import getDecryptedSiiFile from './getDecryptedSiiFile';

export type EndProcessFn = () => void;

export default abstract class SCSFileReader {
  #filePath = '';
  #siiFile = '';
  protected loaded = false;
  protected loading = false;

  error = false;

  constructor(filePath: string) {
    if (!fileexists(filePath)) {
      throw new Error('File does not exist');
    }

    this.#filePath = filePath;
  }

  protected async loadFile() {
    if (this.loaded || this.loading) {
      return;
    }

    this.loading = true;
    this.#siiFile = await getDecryptedSiiFile(this.#filePath);
    const stream = openFileStream(this.#siiFile);
    const reader = readline.createInterface({
      input: stream,
      crlfDelay: Infinity,
    });

    return await new Promise<void>((resolve, reject) => {
      reader.on('line', (line) => {
        try {
          this.processLine(line, () => reader.close());
        } catch (e) {
          this.error = true;
          reader.close();

          reject(e);
        }
      });

      reader.on('close', () => {
        this.loaded = true;
        deletefile(this.#siiFile);
        resolve();
      });
    });
  }

  protected abstract processLine(line: string, endProcess: EndProcessFn): void;
}
