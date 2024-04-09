import { ProcessorFn } from './types';

function firstLineProcessor(): ProcessorFn {
  let isFirstLine = true;
  return function (line: string) {
    if (isFirstLine) {
      if (line !== 'SiiNunit') {
        throw new Error('Invalid SII file');
      }
    }

    isFirstLine = false;
  };
}

export default firstLineProcessor;
