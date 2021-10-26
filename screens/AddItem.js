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

  const labelName = <Text style={{ fontFamily: "Cochin" }}>Name</Text>;
  const labelCategory = <Text style={{ fontFamily: "Cochin" }}>Category</Text>;
  const labelBrand = <Text style={{ fontFamily: "Cochin" }}>Brand</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}> New Item</Text>
        <Avatar.Icon size={260} icon="camera" />
      </View>
      <View>
        <TextInput
          style={styles.textinput}
          label={labelName}
          onChangeText={(text) => {
            setName(text);
          }}
          value={name}
        />
        <TextInput
          style={styles.textinput}
          label={labelCategory}
          onChangeText={(text) => {
            setCategory(text);
          }}
          value={category}
        />
        <TextInput
          style={styles.textinput}
          label={labelBrand}
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
        <Text style={{ fontFamily: "Cochin", color: "black" }}>Save</Text>
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
    fontFamily: "Cochin",
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
