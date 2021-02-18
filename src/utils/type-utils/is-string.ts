export function isString(val: any, name?: string): val is string {
  if (typeof val === "string") {
    return true;
  }
  throw new TypeError(
    `${name} must be of type string\n received => ${typeof val}`
  );
}
