import { Interval } from "../../sheared/types";
import { has } from "lodash";
import { isString } from "./is-string";

export function isIntervalObj(obj: any): obj is Interval {
  const objHasLimit = has(obj, "limit");
  const objHasOffset = has(obj, "offset");

  if (!objHasLimit) {
    throw new TypeError("limit is Required");
  }

  if (objHasOffset) {
    return (
      isString(obj.offset, "interval.offset") &&
      isString(obj.limit, "interval.limit")
    );
  }
  return isString(obj.limit, "interval.limit");
}
