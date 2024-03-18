import createLogger, { Logger, destination } from 'pino';
import { deletefile } from '.';

const logFile = 'app.log';
let logger = null as Logger | null;

try {
  deletefile(logFile);
} catch (error) {
  logger = createLogger({ level: 'silent' });
}

logger =
  logger ??
  createLogger(
    destination({
      dest: logFile,
      mode: 0o666,
    }),
  );

export default logger as Logger;
