import { EndProcessFn, ProcessorFn } from '../types';

const END_REGEX = /^garage\s:\sgarage\..*\s\{$/;

function endProcessor(): ProcessorFn {
  return function (line: string, end?: EndProcessFn) {
    const match = line.match(END_REGEX);
    if (!match?.groups) {
      return;
    }

    end?.();
  };
}

export default endProcessor;
