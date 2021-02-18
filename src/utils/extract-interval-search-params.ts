import { pick } from "lodash";
import { Interval } from "../sheared/types";
import { isIntervalObj } from "./type-utils/is-interval-object";

export function extractIntervalSearchParams(url: string): Interval {
  const _url = new URL(url);
  const params = Object.fromEntries(_url.searchParams);
  if (isIntervalObj(params)) {
    return pick(params, ["limit", "offset"]);
  }
  throw new Error(`${url} doesn't hav the "interval" search-params`);
}
