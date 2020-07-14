import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import Home from "./pages/Home";
import Fruits from "./pages/Fruits";

const Routes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Fruits" component={Fruits} />
    </Stack.Navigator>
  );
};

export default Routes;
