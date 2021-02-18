import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout } from "framer-motion";
import { ROUTES } from "../constants/routes";
import { Header } from "../components/header";
import PokemonsStoreScreen from "../screens/pokemons-store";
import LoadingScreen from "../screens/loading-screen";

function App() {
  return <LoadingScreen />;
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route
            path={[ROUTES.POKEMON_DETAILS, ROUTES.POKEMONS_LIST]}
            component={PokemonsStoreScreen}
          />
        </Router>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
