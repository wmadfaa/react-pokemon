import { extractLastParam } from "./extract-last-param";
import { isPositiveNumber } from "./type-utils/is-positive-number";

export function extractIdParam(url: string) {
  const id = extractLastParam(url);
  if (isPositiveNumber(id)) {
    return id;
  }
  throw new TypeError(
    `type of last param in ${url} must be a positive-number\n received => ${id}`
  );
}
