import React, { PropsWithChildren, ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface SelectorProps<Value> {
  id: string;
  label: string;
  disabled: boolean;
  value: Value;
  onChange: (event: SelectChangeEvent<Value>, child: ReactNode) => void;
  valueRenderer: (value: Value) => ReactNode;
}

// prettier-ignore
const Selector = <Value = unknown>({
  id,
  label,
  disabled,
  value,
  onChange,
  valueRenderer,
  children,
}: PropsWithChildren<SelectorProps<Value>>) => (
  <FormControl fullWidth>
    <InputLabel id={`${id}-label`}>
      {label}
    </InputLabel>
    <Select
      labelId={`${id}-label`}
      id={id}
      disabled={disabled}
      value={value}
      onChange={onChange}
      renderValue={valueRenderer}
    >
      {children}
    </Select>
  </FormControl>
  );

export default Selector;
