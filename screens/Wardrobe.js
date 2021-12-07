/**
 * This will be the wardrobe screen where users can see what are the items they have
 * Author: Novia Wu
 * Date: 12/6/2021
 */
import React, { useContext } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import ItemCard from "./ItemCard";
import { AppContext } from "../AppContext";
import { useNavigation, StackActions } from "@react-navigation/native";

const Wardrobe = () => {
  const contextValue = useContext(AppContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.header}> {contextValue}'s Wardrobe</Text>
      </View>
      <ItemCard />
      <View>
        <Button
          style={styles.button}
          mode="contained"
          compact={true}
          onPress={() => navigation.dispatch(StackActions.replace("AddItem"))}
        >
          <Text style={{ fontFamily: "Cochin", color: "black" }}>Add Item</Text>
        </Button>
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
  button: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});

export default Wardrobe;
