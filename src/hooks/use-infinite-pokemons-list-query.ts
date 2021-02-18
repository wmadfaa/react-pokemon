import {
  FetchInfiniteQueryOptions,
  useInfiniteQuery,
  useQueryClient,
} from "react-query";
import { Interval } from "../sheared/types";
import { getPokemonsList, PokemonsList } from "../api";
import { useAsyncCallback } from "react-async-hook";

const QUERY_KEY = "pokemons-list";

const DEFAULT_INTERVAL: Interval = {
  limit: "20",
};

const options: FetchInfiniteQueryOptions<PokemonsList, Error, PokemonsList> = {
  getPreviousPageParam: ({ previous }) => previous ?? false,
  getNextPageParam: ({ next }) => next ?? false,
};

export function useInfinitePokemonsListQuery(interval = DEFAULT_INTERVAL) {
  return useInfiniteQuery(
    [QUERY_KEY, interval],
    ({ pageParam = interval }) => {
      return getPokemonsList(pageParam);
    },
    options
  );
}

export function usePrefetchInfinitePokemonsListQuery(
  interval = DEFAULT_INTERVAL
) {
  const queryClient = useQueryClient();

  return useAsyncCallback(async (params: Interval = interval) => {
    return queryClient.prefetchInfiniteQuery(
      [QUERY_KEY, interval],
      ({ pageParam = params }) => {
        return getPokemonsList(pageParam);
      },
      options as any
    );
  });
}
