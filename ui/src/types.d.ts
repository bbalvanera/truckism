declare module 'inline-style-expand-shorthand' {
  function expandProperty(property: string, value: string): any;
}

declare const truckismAPI: typeof import('../../app/src/api/api').default;
declare const loggingAPI: typeof import('../../app/src/logging/api').default;
