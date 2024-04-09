import { City, GameName } from 'truckism-types';
import CitiesDb from '@data/CitiesDb';
import { ProcessorFn } from './types';

const LAST_VISITED_CITY_REGEX = /^\s*last_visited_city:\s(?<cityId>.*)$/;

function lastVisitedCityProcessor(
  game: GameName,
  callback: (lastVisitedCity: City) => void,
): ProcessorFn {
  const citiesDb = new CitiesDb(game);

  return function (line: string) {
    const match = line.match(LAST_VISITED_CITY_REGEX);
    if (!match?.groups) {
      return;
    }

    const cityId = match.groups.cityId ?? '';
    const lastVisitedCity = citiesDb.findOrDefault(cityId);

    callback(lastVisitedCity);
  };
}

export default lastVisitedCityProcessor;
