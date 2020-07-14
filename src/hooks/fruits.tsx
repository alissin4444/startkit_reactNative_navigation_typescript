import React, { createContext, useContext, useState } from "react";

interface Fruit {
  id: number;
  name: string;
}

interface FruitContextData {
  fruits: Fruit[];
  addFruit(): void;
}

const FruitContext = createContext<FruitContextData>({} as FruitContextData);

export const FruitProvider: React.FC = ({ children }) => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  const addFruit = async () => {
    const fruitPosition = fruits.length + 1;
    const fruit = {
      id: fruitPosition,
      name: `Fruit ${fruitPosition}`,
    };
    setFruits([...fruits, fruit]);
  };

  return (
    <FruitContext.Provider
      value={{
        fruits,
        addFruit,
      }}
    >
      {children}
    </FruitContext.Provider>
  );
};

export function useFruit() {
  const context = useContext(FruitContext);

  if (!context) {
    throw new Error("Fruit must be used within an FruitProvider");
  } else {
    return context;
  }
}
