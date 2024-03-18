export type LoggingArgs =
  | { obj: object; messsage?: string; args?: any[] }
  | { message: string; args?: any[] };

const logging = {
  trace: (logargs: LoggingArgs) => loggingAPI.trace(logargs),
  debug: (logargs: LoggingArgs) => loggingAPI.debug(logargs),
  info: (logargs: LoggingArgs) => loggingAPI.info(logargs),
  warn: (logargs: LoggingArgs) => loggingAPI.warn(logargs),
  error: (logargs: LoggingArgs) => loggingAPI.error(logargs),
  fatal: (logargs: LoggingArgs) => loggingAPI.fatal(logargs),
};

export default logging;
