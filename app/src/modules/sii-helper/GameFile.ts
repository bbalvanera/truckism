import { City, GameName } from 'truckism-types';
import SCSFileReader, { EndProcessFn } from './SCSFileReader';
import {
  ProcessorFn,
  citiesProcessor,
  firstLineProcessor,
  lastVisitedCityProcessor,
  visitedCityCountProcessor,
  visitedCityProcessor,
} from './processors';

export default class GameFile extends SCSFileReader {
  #game = 'ats' as GameName;
  #cities = [] as City[];
  #lastVisitedCity: City | null = null;
  #visitedCitiesCount = 0;

  readonly #onCityProcessed = (city: City) => this.#cities.push(city);
  readonly #onLastCityVisited = (city: City) => (this.#lastVisitedCity = city);
  readonly #onVisitedCityCount = (count: number) => (this.#visitedCitiesCount = count);
  readonly #onVisitedCity = (cityId: string) => {
    const found = this.#cities.find((c) => c.id === cityId);
    if (found) {
      found.visited = true;
    }
  };

  readonly #processors = [] as ProcessorFn[];

  constructor(gameFilePath: string, game: GameName = 'ats') {
    super(gameFilePath);
    this.#game = game;

    this.#processors = [
      firstLineProcessor(),
      citiesProcessor(game, this.#onCityProcessed),
      lastVisitedCityProcessor(game, this.#onLastCityVisited),
      visitedCityCountProcessor(this.#onVisitedCityCount),
      visitedCityProcessor(this.#visitedCitiesCount, this.#onVisitedCity),
    ];
  }

  async getCities(): Promise<City[]> {
    await this.loadFile();
    return this.#cities;
  }

  async getLastVisitedCity(): Promise<City | null> {
    await this.loadFile();
    return this.#lastVisitedCity;
  }

  protected processLine(line: string, end: EndProcessFn): void {
    this.#processors.forEach((processor) => processor(line, end));
  }
}
