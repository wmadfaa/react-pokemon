import React, { lazy } from "react";
import { RouteComponentProps } from "react-router-dom";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import LoadingScreen from "./loading-screen";
import { usePrefetchInfinitePokemonsListQuery } from "../hooks/use-infinite-pokemons-list-query";
import { useAsync } from "react-async-hook";

const PokemonsListScreen = lazy(() => import("./pokemons-list"));
const PokemonDetailsScreen = lazy(() => import("./pokemon-details"));

type params = {
  id: string;
};

const PokemonsStoreScreen: React.VFC<RouteComponentProps<params>> = (props) => {
  const { id } = props.match.params;
  const prefetchPokemonsList = usePrefetchInfinitePokemonsListQuery();

  useAsync(async () => {
    await prefetchPokemonsList.execute();
  }, []);

  return (
    <React.Suspense fallback={<LoadingScreen />}>
      <AnimateSharedLayout type="crossfade">
        <PokemonsListScreen {...props} />
        <AnimatePresence>
          {id && <PokemonDetailsScreen {...props} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </React.Suspense>
  );
};

export default PokemonsStoreScreen;
