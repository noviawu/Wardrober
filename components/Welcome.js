/**
 * This will be the welcome page which display an image and a welcome button that leads to home screen
 * Author: Novia Wu
 * Date: 9/28/2021
 */
import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/frontpage.jpeg")}
        style={styles.backgroundImg}
      >
        <View style={styles.welcome}>
          <View style={styles.text}>
            <Text style={{ fontSize: 30, fontFamily: "Cochin" }}>
              Welcome...
            </Text>
          </View>
        </View>
        <View style={styles.logo}>
          <Text style={{ fontSize: 40, fontFamily: "Cochin" }}>WARDROBER</Text>
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
    flexDirection: "column-reverse",
  },
  logo: {
    flex: 0.7,
    alignItems: "center",
  },
  welcome: {
    flex: 0.15,
    backgroundColor: "#ffffbf",
  },
  text: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
