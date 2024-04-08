import { City } from 'truckism-types';

function defaultCity(cityId: string): City {
  return {
    id: cityId,
    mapSet: '',
    name: cityId,
    localizedName: cityId,
    country: 'unspecified',
    countryLocalizedName: 'Unspecified',
    companies: [],
    visited: false,
  };
}

export default defaultCity;
