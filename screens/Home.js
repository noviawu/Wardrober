/**
 * This will be the home screen where people can see snippets of clothings, today's weather etc.
 * Author: Novia Wu
 * Date: 9/29/2021
 */
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1, flexDirection: "row", backgroundColor: "lightgreen" }}
      >
        <View style={{ flex: 1, backgroundColor: "lightgreen" }}>
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
        <View style={{ flex: 1, backgroundColor: "lightgreen" }}>
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
      </View>
      <Button
        title="Add an item"
        onPress={() => {
          navigation.navigate("AddItem");
        }}
      ></Button>
    </View>
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
});

export default Home;

/**
 * next step:
 * create fake data in a file that contains the image(?), and the name, and brand
 * use MAP to loop through the data to show items.
 *
 */
