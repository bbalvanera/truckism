import { City, GameName } from 'truckism-types';

export default async function getCompaniesDb(game: GameName = 'ats'): Promise<City[]> {
  return (await import(`${game}-companies.json`)) as City[];
}
