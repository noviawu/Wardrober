import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
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

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  let i = 0;
  return (
    <View style={styles.list}>
      {/* {wardrobe.map((item) => {
        return (
          <View key={i++}>
            <Text>
              Name: {item.name} , Category: {item.category} , Brand:{" "}
              {item.brand}
            </Text>
          </View>
        );
      })} */}
      <FlatList
        style={{ alignSelf: "flex-start" }}
        data={wardrobe}
        renderItem={renderItem}
        key={i++}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  listItem: {
    backgroundColor: "#F8DE90",
    padding: 20,
    marginVertical: 5,
  },
  itemText: {
    fontSize: 28,
  },
});

export default ItemCard;
