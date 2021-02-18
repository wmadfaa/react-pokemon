import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PokemonsListScreen from "./pokemons-list";
import PokemonDetailsScreen from "./pokemon-details";

type params = {
  id: string;
};

const PokemonsStoreScreen: React.VFC<RouteComponentProps<params>> = (props) => {
  const { id } = props.match.params;
  return (
    <>
      <PokemonsListScreen {...props} />
      <AnimatePresence>
        {id && <PokemonDetailsScreen {...props} />}
      </AnimatePresence>
    </>
  );
};

export default PokemonsStoreScreen;
