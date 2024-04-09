import { Cargo, GameName } from 'truckism-types';
import defaultCargo from './defaultCargo';

export default class CargoesDb {
  #db = [] as Cargo[];

  constructor(game: GameName) {
    const load = async () => {
      this.#db = Array.from((await import(`./${game}-cargoes.json`)) as Cargo[]);
    };

    load();
  }

  find(id: string): Cargo | null {
    const found = this.#db.find((c) => c.id === id);
    return found ? { ...found } : null;
  }

  findOrDefault(id: string): Cargo {
    return this.find(id) ?? defaultCargo(id);
  }
}
