export default interface VdfFile {
  key: string;
  value?: string;
  properties?: { [key: string]: VdfFile };
}
