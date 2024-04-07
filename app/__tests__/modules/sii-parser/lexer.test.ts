import tokenize from '../../../src/modules/sii-parser/lexer';
import SIIUNIT from '../../data/modules/sii-parser/ssiunit-data';

// const number = '-1.500e-308';
const input = SIIUNIT;

test.skip('tokenize', () => {
  const tokens = tokenize(input);
  console.log('tokens', tokens);
  expect(tokens.length).toBeGreaterThan(0);
});
