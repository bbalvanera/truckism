export default interface Cargo {
  id: string;
  name: string;
  localizedName: string;
  adrClass?: number;
  fragility?: number;
  overweight?: boolean;
  unitLoadTime?: number;
  unitRewardPerKm?: number;
  volume?: number;
  bodyTypes?: string[];
  groups?: string[];
}
