import { City, GameName } from 'truckism-types';

export default async function getCitiesDb(game: GameName = 'ats'): Promise<City[]> {
  return (await import(`${game}-cities.json`)) as City[];
}
