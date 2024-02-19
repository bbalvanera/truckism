export default interface GameProfile {
  id: string;
  gameName: 'ats' | 'ets2';
  name: string;
  isRemote: boolean;
  path: string;
}
