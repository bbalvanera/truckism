import { Company, GameName } from 'truckism-types';
import defaultCompany from './companyOrDefault';

export default class CompaniesDb {
  #db = [] as Company[];

  constructor(game: GameName) {
    const load = async () => {
      this.#db = Array.from((await import(`./${game}-companies.json`)) as Company[]);
    };

    load();
  }

  find(id: string): Company | null {
    return this.#db.find((c) => c.id === id && c.mapSet === 'Base') ?? null;
  }

  findOrDefault(id: string): Company {
    return this.find(id) ?? defaultCompany(id);
  }
}
