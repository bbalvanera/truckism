import React, { PropsWithChildren, ReactNode } from 'react';

export interface IfProps {
  condition?: boolean;
  fallback?: ReactNode;
}

const If = ({ condition, fallback, children }: PropsWithChildren<IfProps>) => {
  const retVal = condition ? children : fallback ?? <></>;
  return <>{retVal}</>;
};

export default If;
