/**
 * This will be the local wardrobe that the user can store items and look over them
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Avatar, Button, TextInput, List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddItem = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");

  // useEffect(() => {
  //   getData();
  // }, []);

  /**
   * saves the item info in the asych storage
   * @param {*} value the object containing all the item information
   * @param {*} name the name of the item
   */
  const storeItem = async (value, name) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(name, jsonValue);
      console.log("just stored " + jsonValue);
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
    }
  };
  /**
   * commented out this section because this page does not need to use asych to get the stored data
   */
  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem("wardrobe_items");
  //     let data = null;
  //     if (jsonValue != null) {
  //       data = JSON.parse(jsonValue);
  //       setName(data.name);
  //       setCategory(data.category);
  //       console.log("just set Name and Category");
  //     } else {
  //       console.log("just read a null value from Storage");
  //       setName("");
  //       setCategory("");
  //     }
  //   } catch (e) {
  //     console.log("error in getData ");
  //     console.dir(e);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}> New Item</Text>
        <Avatar.Icon size={260} icon="camera" />
      </View>
      <View>
        <TextInput
          style={styles.textinput}
          label="Name"
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <TextInput
          style={styles.textinput}
          label="Category"
          onChangeText={(text) => {
            setCategory(text);
          }}
          value={category}
        />
        <TextInput
          style={styles.textinput}
          label="Brand"
          onChangeText={(text) => {
            setBrand(text);
          }}
          value={brand}
        />
      </View>
      <Button
        style={styles.button}
        mode="outlined"
        compact={true}
        onPress={() => {
          const theInfo = { name, category, brand }; //=== name:name, category:category...
          storeItem(theInfo, name);
          setName("");
          setBrand("");
          setCategory("");
        }}
      >
        Save
      </Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  title: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: 36,
    color: "black",
  },
  textinput: {
    marginTop: 20,
    marginHorizontal: 50,
    fontSize: 17,
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 100,
  },
});

export default AddItem;
