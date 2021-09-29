/**
 * This will be the welcome page which display an image and a welcome button that leads to home screen
 * Author: Novia Wu
 * Date: 9/28/2021
 */
import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/frontpage.jpeg")}
        style={styles.backgroundImg}
      >
        <View style={styles.logo}>
          <Text style={{ fontSize: 40, fontFamily: "Cochin" }}>WARDROBER</Text>
        </View>
        <View style={styles.welcome}>
          <Text
            style={{ fontSize: 30, fontFamily: "Cochin" }}
            onPress={() => navigation.navigate("Details")}
          >
            continue...
          </Text>
        </View>
      </ImageBackground>
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
  backgroundImg: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
  },
  logo: {
    flex: 8.5,
    alignItems: "center",
    justifyContent: "flex-start",
    top: 100,
  },
  welcome: {
    flex: 1.5,
    backgroundColor: "#ffffbf",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
