import { City, Company, GameName } from 'truckism-types';
import CitiesDb from '@data/CitiesDb';
import CompaniesDb from '@data/CompaniesDb';
import { ProcessorFn } from '../types';

const COMPANY_REGEX =
  /^\s*companies\[\d+\]:\scompany\.volatile\.(?<companyId>[a-z0-9_]+)\.(?<cityId>[a-z0-9_]+)$/;

function cityProcessor(
  game: GameName,
  processed: (city: City, company: Company) => void,
): ProcessorFn {
  const citiesDb = new CitiesDb(game);
  const companiesDb = new CompaniesDb(game);

  return function (line: string) {
    const match = line.match(COMPANY_REGEX);
    if (!match?.groups) {
      return;
    }

    const { companyId, cityId } = match.groups;
    const city = citiesDb.findOrDefault(cityId);
    const company = companiesDb.findOrDefault(companyId);

    processed(city, company);
  };
}

export default cityProcessor;
