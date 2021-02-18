import React from "react";
import { RouteComponentProps } from "react-router-dom";

type params = { id: string };

const PokemonDetailsScreen: React.VFC<RouteComponentProps<params>> = (
  props
) => {
  return <div>pokemon details screen {props.match.params.id}</div>;
};

export default PokemonDetailsScreen;
