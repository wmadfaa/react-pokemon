import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import PokemonsStoreScreen from "../screens/pokemons-store";

export const Navigation = () => {
  return (
    <Router>
      <Route
        path={[ROUTES.POKEMON_DETAILS, ROUTES.POKEMONS_LIST]}
        component={PokemonsStoreScreen}
      />
    </Router>
  );
};
