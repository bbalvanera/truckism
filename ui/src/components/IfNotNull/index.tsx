import React, { ReactNode } from 'react';

export interface IfNotNullProps<T> {
  nullable?: T;
  fallback?: ReactNode;
  children: ((check: T) => ReactNode) | ReactNode;
}

function IfNotNull<T = any>({
  nullable: check,
  fallback,
  children,
}: IfNotNullProps<T>): JSX.Element {
  if (check == null || check === undefined) {
    return <>{fallback}</> ?? <></>;
  }

  if (typeof children === 'function') {
    return <>{children(check)}</>;
  }

  return <>{children}</>;
}

export default IfNotNull;
