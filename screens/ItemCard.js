/**
 * This is the item card that will display the items' information
 * Author: Novia Wu
 * Date: 12/2/2021
 */
import React, { useState, useEffect } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import { firebaseRealtimeDB } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemCard = () => {
  const [wardrobe, setWardrobe] = useState([]);

  useEffect(() => {
    const getWardrobe = () => {
      firebaseRealtimeDB.ref("items").on("value", (querySnapshot) => {
        if (querySnapshot.exists()) {
          const items = Object.values(querySnapshot.val());
          console.log(items);
          setWardrobe(items);
        } else {
          console.log("No items found");
        }
      });
    };
    getWardrobe();
  }, []);

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
      <Image
        source={{
          uri: item.image_url,
        }}
        style={styles.photo}
      ></Image>
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
        keyExtractor={() => {
          const key = i++;
          return key.toString();
        }}
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
    width: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 28,
  },
  photo: {
    width: 300,
    height: 300,
  },
});

export default ItemCard;
