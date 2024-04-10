export default interface SiiCommandResult<TResult> {
  id: string;
  success: boolean;
  result?: TResult;
  errorType?: string;
  errorDescription?: string;
}
