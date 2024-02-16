import { execSync } from 'child_process';

function isProcessRunningSync(processName: string): boolean {
  try {
    const stdout = execSync(`tasklist | findstr /I "${processName}"`);
    return stdout.toString() !== '';
  } catch (err) {
    return false;
  }
}

export default isProcessRunningSync;
