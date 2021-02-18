import { compact } from "lodash";

export function extractLastParam(url: string): string {
  const _url = new URL(url);
  return compact(_url.pathname.split("/")).pop() as string;
}
