function hexToString(hex: string): string {
  return Buffer.from(hex, 'hex').toString('utf8');
}

export default hexToString;
