import { City, GameName } from 'truckism-types';
import defaultCity from './defaultCity';

export default class CitiesDb {
  #db = [] as City[];

  constructor(game: GameName) {
    const load = async () => {
      this.#db = Array.from((await import(`./${game}-cities.json`)) as City[]);
    };

    load();
  }

  find(id: string): City | null {
    return this.#db.find((c) => c.id === id) ?? null;
  }

  findOrDefault(id: string): City {
    return this.find(id) ?? defaultCity(id);
  }
}
