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

  // const renderItem = ({ item }) => (
  //   <View style={styles.listItem}>
  //     <Text style={styles.itemText}>{item.name}</Text>
  //   </View>
  // );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}> {contextValue}'s Favorites</Text>
      </View>
      {/* <View style={styles.list}>
        <FlatList
          style={{ alignSelf: "flex-start" }}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View> */}
      <ItemCard />
      {/* <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "pink" }}>
            <Text style={{ fontSize: 24 }}> pink</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "green" }}>
            <Text style={{ fontSize: 24 }}> green</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "yellow" }}>
            <Text style={{ fontSize: 24 }}> yellow</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <Text style={{ fontSize: 24 }}> red</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text style={{ fontSize: 24 }}> white</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "blue" }}>
            <Text style={{ fontSize: 24 }}> blue</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, backgroundColor: "teal" }}>
            <Text style={{ fontSize: 24 }}> teal</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "purple" }}>
            <Text style={{ fontSize: 24 }}> purple</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "silver" }}>
            <Text style={{ fontSize: 24 }}> silver</Text>
          </View>
        </View>
      </View> */}
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
