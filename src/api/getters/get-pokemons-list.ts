import { httpClient } from "../http-client";
import { Interval } from "../../sheared/types";
import { PokemonsListResponse } from "../types";
import { extractIntervalSearchParams as extractInterval } from "../../utils/extract-interval-search-params";
import { extractIdParam } from "../../utils/extract-id-param";

export interface PokemonsList {
  count: number;
  next: Interval | null;
  previous: Interval | null;
  results: { name: string; id: string }[];
}

export async function getPokemonsList({
  limit,
  offset,
}: Interval): Promise<PokemonsList> {
  const { data } = await httpClient.get<PokemonsListResponse>(
    `/pokemon?limit=${limit}&offset=${offset}`
  );

  const next = data.next ? extractInterval(data.next) : null;
  const previous = data.previous ? extractInterval(data.previous) : null;
  const results = data.results.map(({ name, url }) => ({
    name,
    id: extractIdParam(url),
  }));

  return { ...data, next, previous, results };
}
