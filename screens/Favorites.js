/**
 * This will be the favorites screen where users can see what are the items they marked as favorite
 * Author: Novia Wu
 * Date: 9/29/2021
 */
import React, { useContext } from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import ItemCard from "./ItemCard";
import { AppContext } from "../AppContext";

const Favorites = () => {
  const contextValue = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}> {contextValue}'s Favorites</Text>
      </View>
      <ItemCard />
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
  items: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "yellow",
  },
  title: {
    flex: 1,
  },
  header: {
    fontSize: 36,
    fontFamily: "Cochin",
    color: "black",
  },
});

export default Favorites;
