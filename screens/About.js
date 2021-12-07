/**
 * This will be my static creative application for a wordrobe selector
 * Author: Novia Wu
 * Date: 12/6/2021
 */
import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import { AppContext } from "../AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, StackActions } from "@react-navigation/native";

const About = (props) => {
  const contextValue = useContext(AppContext);
  const [user, setUser] = useState(contextValue);
  const navigation = useNavigation();

  const labelName = <Text style={{ fontFamily: "Cochin" }}>Name</Text>;

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem("user", user);
      console.log("just stored " + user);
      navigation.dispatch(StackActions.replace("Welcome"));
    } catch (e) {
      console.log("error in storeData ");
      console.dir(e);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ height: "100%", width: "100%" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.header}>About</Text>
          </View>
          <Text style={{ flex: 1.5, marginHorizontal: 50 }}>
            Wardrober is a React-Native based mobile wardrobe that contains all
            the fashion items you own, aiming to streamline the process of
            picking your outfit of the day (OOTD).
          </Text>
          <View style={{ flex: 2 }}>
            <Text style={{ marginLeft: 50 }}>
              You are logged in as {user} {"\n"}
              Change user here:
            </Text>
            <TextInput
              style={styles.textinput}
              label={labelName}
              onChangeText={(text) => {
                setUser(text);
              }}
              value={user}
            />
            <Button
              style={styles.button}
              mode="contained"
              compact={true}
              onPress={() => {
                handleSave();
              }}
            >
              <Text style={{ fontFamily: "Cochin", color: "black" }}>Save</Text>
            </Button>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 36,
    fontFamily: "Cochin",
    color: "black",
    textAlign: "center",
  },
  button: {
    marginVertical: 20,
    marginHorizontal: 100,
  },
  textinput: {
    marginTop: 20,
    marginHorizontal: 50,
    fontSize: 17,
  },
});
export default About;
