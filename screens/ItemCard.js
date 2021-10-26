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
  });

  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      //console.log(keys);
      const result = await AsyncStorage.multiGet(keys);
      //console.log(result);
      const a = result.map((req) => JSON.parse(req[1]));
      console.log(a);
      setWardrobe(a);
    } catch (e) {
      console.log("error in getData ");
      console.dir(e);
    }
  };

  return (
    <View>
      {wardrobe.map((item) => {
        return (
          <View>
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
