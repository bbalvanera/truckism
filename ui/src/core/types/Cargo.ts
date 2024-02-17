import HazmatClass from './HazmatClass';
import JobFlags from './JobFlags';

export default interface Cargo {
  name: string;
  weight: number;
  flags: JobFlags;
  hazmat: HazmatClass;
}
