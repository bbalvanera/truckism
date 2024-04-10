import Proxy from './Proxy';

function getDecryptedSiiFile(filePath: string): Promise<string> {
  const args = {
    filePath,
  };

  return Proxy.executeCall('GetSiiFile', args);
}

export default getDecryptedSiiFile;
