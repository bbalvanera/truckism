import { City, Company, GameName } from 'truckism-types';
import CitiesDb from '@data/CitiesDb';
import CompaniesDb from '@data/CompaniesDb';
import SCSFileReader, { EndProcessFn } from './SCSFileReader';

const COMPANY_COUNT_REGEX = /^\s*companies:\s*(?<count>\d+)$/;
const COMPANY_REGEX =
  /^\s*companies\[\d+\]:\scompany\.volatile\.(?<companyId>[a-z0-9_]+)\.(?<cityId>[a-z0-9_]+)$/;
const LAST_VISITED_CITY_REGEX = /^\s*last_visited_city:\s(?<cityId>.*)$/;
const VISITED_CITY_COUNT_REGEX = /^\s*visited_cities:\s(?<count>\d+)$/;
const VISITED_CITY_REGEX = /^\s*visited_cities\[\d+\]:\s(?<cityId>.*)$/;

type ProcessorFn = (line: string, end: EndProcessFn) => void;

export default class GameFile extends SCSFileReader {
  #isFirstLine = true;
  #game = 'ats' as GameName;
  #companyCount = 0;
  #cities = new Map<string, City>();
  #lastVisited = null as City | null;
  #visitedCitiesCount = 0;
  #visitedCitiesTotal = 0;

  readonly #processors = [] as ProcessorFn[];
  readonly #citiesDb: CitiesDb;
  readonly #companiesDb: CompaniesDb;

  constructor(gameFilePath: string, game: GameName = 'ats') {
    super(gameFilePath);
    this.#game = game;

    this.#processors = [
      this.#processFirstLine.bind(this),
      this.#processCompanyCount.bind(this),
      this.#processCompany.bind(this),
      this.#processLastVisitedCity.bind(this),
      this.#processVisitedCityCount.bind(this),
      this.#processVisitedCity.bind(this),
    ];

    this.#citiesDb = new CitiesDb(this.#game);
    this.#companiesDb = new CompaniesDb(this.#game);

    this.threadid = Math.floor(Math.random() * 1000);
  }

  async getCompanyCount(): Promise<number> {
    await this.loadFile();
    return this.#companyCount;
  }

  async getCities(): Promise<City[]> {
    await this.loadFile();
    return Array.from(this.#cities.values());
  }

  async getCityCompanies(cityId: string): Promise<Company[]> {
    await this.loadFile();
    return this.#cities.get(cityId)?.companies ?? [];
  }

  async getLastVisitedCity(): Promise<City | null> {
    await this.loadFile();
    return this.#lastVisited;
  }

  protected processLine(line: string, end: EndProcessFn): void {
    this.#processors.forEach((processor) => processor(line, end));
  }

  #processFirstLine(line: string): void {
    if (this.#isFirstLine) {
      if (line !== 'SiiNunit') {
        throw new Error('Invalid SII file');
      }
    }

    this.#isFirstLine = false;
  }

  #processCompanyCount(line: string): void {
    const match = line.match(COMPANY_COUNT_REGEX);
    if (!match?.groups) {
      return;
    }

    this.#companyCount = +(match.groups?.count ?? 0);
  }

  #processCompany(line: string) {
    const match = line.match(COMPANY_REGEX);
    if (!match?.groups) {
      return;
    }

    const { companyId, cityId } = match.groups;
    if (!this.#cities.has(cityId)) {
      const city = this.#citiesDb.findOrDefault(cityId);
      this.#cities.set(cityId, city);
    }

    const company = this.#companiesDb.findOrDefault(companyId);
    this.#cities.get(cityId)?.companies.push(company);
  }

  #processLastVisitedCity(line: string) {
    const match = line.match(LAST_VISITED_CITY_REGEX);
    if (!match?.groups) {
      return;
    }

    const cityId = match.groups.cityId ?? '';
    this.#lastVisited = this.#citiesDb.findOrDefault(cityId);
  }

  #processVisitedCityCount(line: string) {
    const match = line.match(VISITED_CITY_COUNT_REGEX);
    if (!match?.groups) {
      return;
    }

    this.#visitedCitiesCount = +(match.groups.count ?? 0);
  }

  #processVisitedCity(line: string, end: EndProcessFn) {
    const match = line.match(VISITED_CITY_REGEX);
    if (!match?.groups) {
      return;
    }

    const cityId = match.groups.cityId ?? '';
    const city = this.#cities.get(cityId);

    if (city) {
      city.visited = true;
      this.#visitedCitiesTotal++;

      if (this.#visitedCitiesTotal >= this.#visitedCitiesCount) {
        end();
      }
    }
  }
}
