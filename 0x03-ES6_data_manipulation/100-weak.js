export const weakMap = new WeakMap();

export function queryAPI(obj) {
  if (!weakMap.has(obj)) weakMap.set(obj, 1);
  else if (weakMap.get(obj) >= 5) throw Error('Endpoint load is high');
  else weakMap.set(obj, weakMap.get(obj) + 1);
}
