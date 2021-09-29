/**
 * This will be the local wardrobe that the user can store items and look over them
 */

import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Wardrobe = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const storeItem = async (value) => {
    // this saves the item info in the asych storage
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("wardrobe_items", jsonValue);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
    }
  };

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      const jsonValue = await AsyncStorage.getItem("wardrobe_items");
      let data = null;
      if (jsonValue != null) {
        data = JSON.parse(jsonValue);
        setName(data.name);
        setCategory(data.category);
        console.log("just set Name and Category");
      } else {
        console.log("just read a null value from Storage");
        setName("");
        setCategory("");
      }
    } catch (e) {
      console.log("error in getData ");
      console.dir(e);
      // error reading value
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> New Item</Text>
      <TextInput
        style={styles.textinput}
        placeholder="name"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      <TextInput
        style={styles.textinput}
        placeholder="category"
        onChangeText={(text) => {
          setCategory(text);
        }}
        value={category}
      />
      <Button
        color="red"
        title="Save Item"
        onPress={() => {
          console.log("saving item");
          const theInfo = { name: name, category: category };
          console.log(`theInfo=${theInfo}`);
          console.log("data=" + JSON.stringify(theInfo));
          storeItem(theInfo);
        }}
      />
      <View>
        <Text>
          name={name} category={category}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textinput: {
    margin: 20,
    fontSize: 20,
  },
  header: {
    fontSize: 40,
    color: "blue",
  },
});

export default Wardrobe;
