export type EndProcessFn = () => void;
export type ProcessorFn = (line: string, end?: EndProcessFn) => void;
