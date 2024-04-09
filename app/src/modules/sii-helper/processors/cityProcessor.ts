import { City, GameName } from 'truckism-types';
import CitiesDb from '@data/CitiesDb';
import CompaniesDb from '@data/CompaniesDb';
import { ProcessorFn } from './types';

const COMPANY_REGEX =
  /^\s*companies\[\d+\]:\scompany\.volatile\.(?<companyId>[a-z0-9_]+)\.(?<cityId>[a-z0-9_]+)$/;

function cityProcessor(game: GameName, processed: (city: City) => void): ProcessorFn {
  const citiesDb = new CitiesDb(game);
  const companiesDb = new CompaniesDb(game);

  const citiesMap = new Map<string, City>();

  return function (line: string) {
    const match = line.match(COMPANY_REGEX);
    if (!match?.groups) {
      return;
    }

    const { companyId, cityId } = match.groups;
    if (!citiesMap.has(cityId)) {
      const city = citiesDb.findOrDefault(cityId);
      citiesMap.set(cityId, city);
      processed(city);
    }

    const company = companiesDb.findOrDefault(companyId);
    citiesMap.get(cityId)?.companies.push(company);
  };
}

export default cityProcessor;
