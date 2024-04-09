import { Cargo, City, GameName } from 'truckism-types';
import SCSFileReader, { EndProcessFn } from './SCSFileReader';
import {
  ProcessorFn,
  cityProcessor,
  firstLineProcessor,
  lastVisitedCityProcessor,
  visitedCityCountProcessor,
  visitedCityProcessor,
  cargoProcessor,
} from './processors';

export default class GameFile extends SCSFileReader {
  #cities = [] as City[];
  #cargoes = [] as Cargo[];
  #lastVisitedCity: City | null = null;
  #visitedCitiesCount = 0;
  readonly #processors = [] as ProcessorFn[];

  readonly #addCity = (city: City) => this.#cities.push(city);
  readonly #setLastCityVisited = (city: City) => (this.#lastVisitedCity = city);
  readonly #setVisitedCitiesCount = (count: number) => (this.#visitedCitiesCount = count);
  readonly #setVisitedCity = (cityId: string) => {
    const found = this.#cities.find((c) => c.id === cityId);
    if (found) {
      found.visited = true;
    }
  };
  readonly #addCargo = (cargo: Cargo) => {
    const found = this.#cargoes.find((c) => c.id === cargo.id);

    if (!found) {
      this.#cargoes.push(cargo);
    }
  };

  constructor(gameFilePath: string, game: GameName = 'ats') {
    super(gameFilePath);

    this.#processors = [
      firstLineProcessor(),
      cityProcessor(game, this.#addCity),
      lastVisitedCityProcessor(game, this.#setLastCityVisited),
      visitedCityCountProcessor(this.#setVisitedCitiesCount),
      visitedCityProcessor(this.#visitedCitiesCount, this.#setVisitedCity),
      cargoProcessor(game, this.#addCargo),
    ];
  }

  get cities(): City[] {
    return this.#cities;
  }

  get cargoes(): Cargo[] {
    return this.#cargoes;
  }

  get lastVisitedCity(): City | null {
    return this.#lastVisitedCity;
  }

  async load() {
    await this.loadFile();
  }

  protected processLine(line: string, end: EndProcessFn): void {
    this.#processors.forEach((processor) => processor(line, end));
  }
}
