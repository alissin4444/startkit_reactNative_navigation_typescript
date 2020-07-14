import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useFruit } from "../../hooks/fruits";

const Home: React.FC = () => {
  const { addFruit } = useFruit();

  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Fruits")}>
        <Text>Visualize your fruits</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addFruit()} style={{ marginTop: 40 }}>
        <Text>Add a new fruit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
