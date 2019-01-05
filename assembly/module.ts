declare function log(s: string): void;

export function add(x: i32, y: i32): i32 {
  log('calling add function in wasm');
  return x + y;
}
