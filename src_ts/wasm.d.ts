declare const mod: Uint8Array;

export default mod;

declare module "*.wasm" {
  const mod: string;
  export = mod;
}