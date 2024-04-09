import { Cargo } from 'truckism-types';

function defaultCompany(cargoId: string): Cargo {
  return {
    id: cargoId,
    name: cargoId,
    localizedName: cargoId,
  };
}

export default defaultCompany;
