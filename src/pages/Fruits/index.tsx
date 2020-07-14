import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { useFruit } from "../../hooks/fruits";

const Fruits = () => {
  const { fruits } = useFruit();

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {fruits.map((fruit) => (
        <Text key={fruit.id}>{fruit.name}</Text>
      ))}
    </View>
  );
};

export default Fruits;
