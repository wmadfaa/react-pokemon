import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useInfinitePokemonsListQuery } from "../hooks/use-infinite-pokemons-list-query";

const PokemonsListScreen: React.VFC<RouteComponentProps> = (props) => {
  const { data } = useInfinitePokemonsListQuery();
  console.log(data);
  return <div>pokemons list screen</div>;
};

export default PokemonsListScreen;
