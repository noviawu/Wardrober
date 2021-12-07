/**
 * This will be the welcome page which display an image and a welcome button that leads to home screen
 * Author: Novia Wu
 * Date: 12/2/2021
 */
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "../AppContext";

const Welcome = () => {
  const navigation = useNavigation();
  const contextValue = useContext(AppContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        setUser(user);
      } catch (e) {
        console.log("error in getUser ");
        console.dir(e);
      }
    };
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/frontpage.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.logo}>
          <Text style={{ fontSize: 40, fontFamily: "Cochin" }}>WARDROBER</Text>
        </View>
        <View style={styles.welcome}>
          <Text
            style={{ fontSize: 30, fontFamily: "Cochin" }}
            onPress={() => navigation.dispatch(StackActions.replace("Home"))}
          >
            Hi {user === contextValue ? contextValue : user} ...
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
    top: 150,
  },
  welcome: {
    flex: 1.5,
    backgroundColor: "#E89941",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Welcome;
