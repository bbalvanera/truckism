import Proxy from './Proxy';

async function getDecryptedSiiFile(filePath: string): Promise<string> {
  const args = {
    filePath,
  };

  return await Proxy.executeCall('GetSiiFile', args);
}

export default getDecryptedSiiFile;
