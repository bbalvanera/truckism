function toProperCase(str: string) {
  return str
    .replace(/_/g, ' ')
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

export default toProperCase;
