export function isPositiveNumber(val: any): val is string {
  return /^\d+$/.test(val);
}
