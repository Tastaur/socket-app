export function shallowClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}


export function parseJsonSafely<T>(str: string | null, defaultValue: T): T {
  if (!str) {
    return shallowClone(defaultValue);
  }
  try {
    return JSON.parse(str);
  } catch (e) {
    return shallowClone(defaultValue);
  }
}
