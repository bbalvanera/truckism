import { ProcessorFn } from './types';

const VISITED_CITY_COUNT_REGEX = /^\s*visited_cities:\s(?<count>\d+)$/;

function visitedCityCountProcessor(callback: (count: number) => void): ProcessorFn {
  return function (line: string) {
    const match = line.match(VISITED_CITY_COUNT_REGEX);
    if (!match?.groups) {
      return;
    }

    callback(+(match.groups.count ?? 0));
  };
}

export default visitedCityCountProcessor;
