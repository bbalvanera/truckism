import { Cargo, City, Company } from 'truckism-types';
import { toTitleCase } from '@common/utils';

export function fixCity(city: City): City {
  city.name = toTitleCase(city.name);
  city.localizedName = toTitleCase(city.localizedName);

  return city;
}

export function fixCompany(company: Company): Company {
  company.name = toTitleCase(company.name);

  return company;
}

export function fixCargo(cargo: Cargo): Cargo {
  cargo.name = toTitleCase(cargo.name);
  cargo.localizedName = toTitleCase(cargo.localizedName);

  return cargo;
}
