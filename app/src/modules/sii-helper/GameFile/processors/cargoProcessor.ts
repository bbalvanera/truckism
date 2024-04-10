import { Cargo, GameName } from 'truckism-types';
import CargoesDb from '@data/CargoesDb';
import { ProcessorFn } from '../types';

const CARGO_REGEX = /^\scargo:\scargo\.(?<cargoName>.*)$/;

function cargoProcessor(game: GameName, processed: (cargo: Cargo) => void): ProcessorFn {
  const cargoesDb = new CargoesDb(game);

  return (line: string) => {
    const match = line.match(CARGO_REGEX);
    if (!match?.groups) {
      return;
    }

    const cargoName = match.groups.cargoName ?? '';
    const cargo = cargoesDb.findOrDefault(cargoName);

    processed(cargo);
  };
}

export default cargoProcessor;
