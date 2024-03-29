import Proxy from './Proxy';

export async function getSiiFileContents(filePath: string): Promise<string[]> {
  const args = {
    filePath,
  };

  return await Proxy.executeCall('GetSiiFile', args);
}
