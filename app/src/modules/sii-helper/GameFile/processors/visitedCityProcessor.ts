import { ProcessorFn } from '../types';

const VISITED_CITY_REGEX = /^\s*visited_cities\[\d+\]:\s(?<cityId>.*)$/;

function visitedCityProcessor(processed: (cityId: string) => void): ProcessorFn {
  return (line: string) => {
    const match = line.match(VISITED_CITY_REGEX);
    if (!match?.groups) {
      return;
    }

    const cityId = match.groups.cityId ?? '';
    processed(cityId);
  };
}

export default visitedCityProcessor;
