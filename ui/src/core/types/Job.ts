import Cargo from './Cargo';
import CargoLocation from './CargoLocation';
import Urgency from './Urgency';

export default interface Job {
  cargo: Cargo;
  origin: CargoLocation;
  destination: CargoLocation;
  urgency: Urgency;
}
