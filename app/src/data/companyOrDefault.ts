import { Company } from 'truckism-types';

function defaultCompany(companyId: string): Company {
  return {
    id: companyId,
    name: companyId,
    mapSet: '',
  };
}

export default defaultCompany;
