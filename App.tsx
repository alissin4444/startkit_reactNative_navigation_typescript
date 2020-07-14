import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/Routes";

import { FruitProvider } from "./src/hooks/fruits";

const App: React.FC = () => {
  return (
    <FruitProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </FruitProvider>
  );
};

export default App;
