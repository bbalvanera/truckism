import { City, Company, GameName } from 'truckism-types';
import { fileexists } from '@common/utils';
import getCitiesDb from '@data/getCitiesDb';
import getCompaniesDb from '@data/getCompaniesDb';
import { getSiiFile } from '@modules/sii-helper';
import { FileReader } from '@modules/vdf-helper';

const COMPANY_REGEX =
  /^\s*companies\[\d+\]:\scompany\.volatile\.(?<companyId>[a-z0-9_]+)\.(?<cityId>[a-z0-9_]+)$/;

function defaultCity(cityId: string): City {
  return {
    id: cityId,
    mapSet: '',
    name: cityId,
    localizedName: cityId,
    country: 'Unspecified',
    countryLocalizedName: 'Unspecified',
    companies: [],
  };
}

function defaultCompany(companyId: string): Company {
  return {
    id: companyId,
    name: companyId,
    mapSet: '',
  };
}

async function getCitiesFromSavefile(
  savefilePath: string,
  game: GameName,
): Promise<Map<string, City>> {
  const startTime = Date.now();

  if (!fileexists(savefilePath)) {
    throw new Error('File does not exist');
  }

  const retVal = new Map<string, City>();
  const content = await getSiiFile(savefilePath, { plainText: false });
  const fr = new FileReader(content);
  const first = fr.next();

  if (first !== 'SiiNunit') {
    throw new Error('Invalid SII file');
  }

  while (!fr.done()) {
    const curr = fr.peek();

    if (!curr.includes('companies:')) {
      fr.next();
      continue;
    }

    fr.next();

    const count = curr.match(/\d+/g)?.[0];
    if (!count) {
      break;
    }

    const companyCount = +count;
    const citiesDb = await getCitiesDb(game);
    const companiesDb = await getCompaniesDb(game);

    for (let i = 0; i < companyCount; i++) {
      const companyLn = fr.next();
      const match = COMPANY_REGEX.exec(companyLn);

      if (!match?.groups) {
        throw new Error(`Invalid company: ${companyLn}`);
      }

      const { companyId, cityId } = match.groups;
      if (!retVal.has(cityId)) {
        const city = citiesDb.find((c) => c.id === cityId) ?? defaultCity(cityId);
        retVal.set(cityId, city);
      }

      const company =
        companiesDb.find((c) => c.id === companyId && c.mapSet === 'Base') ??
        defaultCompany(companyId);

      retVal.get(cityId)?.companies.push(company);
    }
  }

  const endtime = Date.now();

  console.log('Execution time: ', endtime - startTime, 'ms');

  return retVal;
}

export default getCitiesFromSavefile;
