import logger from './logger';

export type LoggingArgs = { obj?: object; message?: string; args?: any[] };

const logMethods = {
  trace: logger.trace.bind(logger),
  debug: logger.debug.bind(logger),
  info: logger.info.bind(logger),
  warn: logger.warn.bind(logger),
  error: logger.error.bind(logger),
  fatal: logger.fatal.bind(logger),
};

type LogMethod = keyof typeof logMethods;

const handleLogging = ({ level, args }: { level: LogMethod; args: LoggingArgs }) => {
  const { obj, message, args: rest = [] } = args;
  const logMethod = logMethods[level];

  if (obj) {
    logMethod(obj, message, ...rest);
  } else {
    logMethod(message, ...rest);
  }
};

export default handleLogging;
