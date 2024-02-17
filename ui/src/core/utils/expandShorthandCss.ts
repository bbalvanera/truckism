import { CSSProperties } from 'react';
import * as CSS from 'csstype';
import curry from './curryExpandableProp';

export const expandFlex = ({
  j,
  a,
  d,
  g,
}: {
  j?: CSS.Property.JustifyContent;
  a?: CSS.Property.AlignItems;
  d?: CSS.Property.FlexDirection;
  g?: CSS.Property.Gap<(string & object) | number>;
}): Pick<CSSProperties, 'display' | 'justifyContent' | 'alignItems' | 'flexDirection' | 'gap'> => ({
  display: 'flex',
  flexDirection: d,
  justifyContent: j,
  alignItems: a,
  gap: g,
});

export const expandBorderTop = curry('borderTop');
export const expandBorder = curry('border');
export const expandBorderColor = curry('borderColor');
export const expandBorderWidth = curry('borderWidth');
