import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemCard = () => {
  // const [name, setName] = useState("");
  // const [category, setCategory] = useState("");
  // const [brand, setBrand] = useState("");
  const [wardrobe, setWardrobe] = useState([]);

  useEffect(() => {
    getData();
  }, []); // i think i need to change the re-render frequency bc it goes into a loop here

  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      const a = result.map((req) => JSON.parse(req[1]));
      console.log(a);
      setWardrobe(a);
    } catch (e) {
      console.log("error in getData ");
      console.dir(e);
    }
  };

  let i = 0;
  return (
    <View>
      {wardrobe.map((item) => {
        return (
          <View key={i++}>
            <Text>
              Name: {item.name} , Category: {item.category} , Brand:{" "}
              {item.brand}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default ItemCard;
