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
      <Text>Home Screen is here, yet to implemented...</Text>
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
});

export default Home;
