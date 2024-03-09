import { readFileSync } from 'node:fs';

export default class FileReader {
  #lines: string[] = [];

  constructor(filePath: string) {
    const content = readFileSync(filePath, 'utf8');
    this.#lines = content.split('\n');
  }

  peek(): string {
    return this.#canRead() ? this.#lines[0] : '';
  }

  next(): string {
    return this.#canRead() ? this.#lines.shift() ?? '' : '';
  }

  done(): boolean {
    return !this.#canRead();
  }

  #canRead(): boolean {
    return this.#lines.length > 0;
  }
}
