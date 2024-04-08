import { useEffect } from 'react';
import { City } from 'truckism-types';

export interface FormResetterProps {
  cities: City[] | undefined;
  resetForm: () => void;
}

const FormResetter = ({ cities, resetForm }: FormResetterProps) => {
  useEffect(() => {
    resetForm();
  }, [cities, resetForm]);

  return null;
};

export default FormResetter;
