import { readFileSync } from 'node:fs';

export default class FileReader {
  #lines: string[] = [];
  #idx = 0;
  #count = 0;

  constructor(source: string | string[]) {
    let content = source;

    if (typeof source === 'string') {
      content = readFileSync(source, 'utf8');
      content = content.split('\n');
    }

    this.#lines = content as string[];
    this.#count = this.#lines.length;
    this.#idx = 0;
  }

  peek(): string {
    return this.#canRead() ? this.#lines[this.#idx] : '';
  }

  next(): string {
    return this.#canRead() ? this.#lines[this.#idx++] ?? '' : '';
  }

  done(): boolean {
    return !this.#canRead();
  }

  #canRead(): boolean {
    return this.#idx < this.#count;
  }
}
