import { spawn, ChildProcess } from 'child_process';
import { resolve as resolvePath } from 'path';
import { extras } from '../../environment';
import SiiCommandResult from './SiiCommandResult';
import type CommandArgs from './CommandArgs';

type ProxyType = 'Unknown' | 'GetSiiFile';
type Handlers = {
  resolve: (value?: any | PromiseLike<any>) => void;
  reject: (reason?: any) => void;
};

let helper: ChildProcess;
const queue: Map<string, Handlers> = new Map();

function getCommandResult(data: Buffer) {
  return JSON.parse(data.toString('utf8')) as SiiCommandResult<any>;
}

function handleStdOut(data: Buffer) {
  const { id, success, result, errorType, errorDescription } = getCommandResult(data);
  const handlers = queue.get(id);

  if (!handlers) {
    return;
  } else {
    queue.delete(id);
  }

  const { resolve, reject } = handlers;
  success
    ? resolve(result)
    : reject({
        errorType: errorType,
        errorDescription: errorDescription,
      });
}

(function init(): void {
  const helperPath = resolvePath(__dirname, extras, 'helper/siihelper.exe');
  helper = spawn(helperPath);

  helper?.stdout?.on('data', handleStdOut);
  helper?.stderr?.on('data', handleStdOut);
})();

export default class Proxy {
  public static executeCall<T>(type: ProxyType, args: CommandArgs): Promise<T> {
    const id = JSON.stringify({ type, args });
    const request = {
      id,
      type,
      args,
    };

    const retVal = new Promise<T>((resolve, reject) => {
      queue.set(id, { resolve, reject });
    });

    helper?.stdin?.write(JSON.stringify(request) + '\n');

    return retVal;
  }
}
