import { EndProcessFn, ProcessorFn } from '../types';

const VISITED_CITY_REGEX = /^\s*visited_cities\[\d+\]:\s(?<cityId>.*)$/;

function visitedCityProcessor(
  visitedCount: number,
  processed: (cityId: string) => void,
): ProcessorFn {
  let visitedCitiesTotal = 0;

  return (line: string, end?: EndProcessFn) => {
    const match = line.match(VISITED_CITY_REGEX);
    if (!match?.groups) {
      return;
    }

    const cityId = match.groups.cityId ?? '';
    processed(cityId);

    visitedCitiesTotal++;

    if (visitedCitiesTotal >= visitedCount) {
      end?.();
    }
  };
}

export default visitedCityProcessor;
