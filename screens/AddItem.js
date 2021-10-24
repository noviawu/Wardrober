/**
 * This will be the local wardrobe that the user can store items and look over them
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Avatar, Button, TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddItem = (props) => {
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
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}> New Item</Text>
        <Avatar.Image
          size={260}
          source={{ uri: "https://picsum.photos/700" }}
        />
      </View>
      <View>
        <TextInput
          // style={styles.textinput}
          label="Name"
          value={name}
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
      </View>
      <View>
        <Text>
          name={name} category={category}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    //alignItems: "center",
  },
  title: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  textinput: {
    margin: 20,
    fontSize: 20,
  },
  header: {
    fontSize: 36,
    color: "black",
  },
});

export default AddItem;
