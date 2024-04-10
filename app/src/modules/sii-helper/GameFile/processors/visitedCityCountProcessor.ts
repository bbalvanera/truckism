import { ProcessorFn } from '../types';

const VISITED_CITY_COUNT_REGEX = /^\s*visited_cities:\s(?<count>\d+)$/;

function visitedCityCountProcessor(processed: (count: number) => void): ProcessorFn {
  return function (line: string) {
    const match = line.match(VISITED_CITY_COUNT_REGEX);
    if (!match?.groups) {
      return;
    }

    processed(+(match.groups.count ?? 0));
  };
}

export default visitedCityCountProcessor;
