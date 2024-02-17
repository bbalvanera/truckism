import { expandProperty } from 'inline-style-expand-shorthand';

// these are the only props supported by inline-style-expand-shorthand at the moment
export type ExpandableProperties =
  | 'border'
  | 'borderTop'
  | 'borderRight'
  | 'borderBottom'
  | 'borderLeft'
  | 'borderWidth'
  | 'borderStyle'
  | 'borderColor'
  | 'padding'
  | 'margin'
  | 'outline'
  | 'flex';

function curryExpandableProp(property: ExpandableProperties): (values: string) => object {
  return function expand(values: string) {
    return expandProperty(property, values);
  };
}

export default curryExpandableProp;
