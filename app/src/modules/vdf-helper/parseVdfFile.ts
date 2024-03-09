import FileReader from './FileReader';
import VdfFile from './VdfFile';

const quotedText = /"([^"]*)"/g;

function parseVdfFile(lines: FileReader): VdfFile | undefined {
  const retVal: VdfFile = {
    key: '',
  };

  const line = lines.peek();

  if (line.trim() === '}') {
    return undefined;
  } else {
    lines.next();
  }

  const matches = [...line.matchAll(quotedText)];

  if (matches.length === 0 || matches.length > 2) {
    throw new Error('Invalid format');
  }

  retVal.key = matches[0][1];
  if (matches.length === 2) {
    retVal.value = matches[1][1];
  }

  const nextLine = lines.peek();
  if (nextLine.trim() === '{') {
    lines.next();

    for (;;) {
      const parsed = parseVdfFile(lines);
      retVal.properties = retVal.properties || {};
      parsed && (retVal.properties[parsed.key] = parsed);

      if (lines.done()) {
        break;
      }

      if (lines.peek().trim() === '}') {
        lines.next();
        break;
      }
    }
  }

  return retVal;
}

export default parseVdfFile;
