import getCompanies from '../../../src/modules/sii-parser/getCompanies';

test('getCompanies', () => {
  const data = getCompanies();
  expect(data).toBeDefined();
});
