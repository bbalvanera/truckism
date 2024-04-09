import Cargo from './Cargo';
import City from './City';

export default interface GameData {
  cities: City[];
  cargoes: Cargo[];
  lastVisitedCity: City | null;
}
