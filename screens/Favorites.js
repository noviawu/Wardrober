/**
 * This will be the favorites screen where users can see what are the items they marked as favorite
 * Author: Novia Wu
 * Date: 12/6/2021
 */
import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { AppContext } from "../AppContext";
import { firebaseRealtimeDB } from "../firebase";

const width = Dimensions.get("window").width; //full width
const Favorites = () => {
  const contextValue = useContext(AppContext);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const getFavs = () => {
      firebaseRealtimeDB.ref("favorites").on("value", (querySnapshot) => {
        if (querySnapshot.exists()) {
          const items = Object.values(querySnapshot.val());
          setFav(items);
        } else {
          console.log("No items found");
        }
      });
    };
    getFavs();
  }, []);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}> {contextValue}'s Favorites</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          style={{ alignSelf: "flex-start" }}
          data={fav}
          renderItem={renderItem}
          keyExtractor={() => {
            const key = i++;
            return key.toString();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 1,
  },
  header: {
    fontSize: 36,
    fontFamily: "Cochin",
    color: "black",
  },
  list: {
    flex: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  listItem: {
    padding: 20,
    marginVertical: 5,
    width: 350,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 28,
    fontFamily: "Cochin",
  },
  photo: {
    width: 300,
    height: 300,
  },
});

export default Favorites;
