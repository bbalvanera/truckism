import Company from './Company';

export default interface City {
  id: string;
  name: string;
  mapSet: string;
  localizedName: string;
  country: string;
  countryLocalizedName: string;
  companies: Company[];
  visited: boolean;
}
