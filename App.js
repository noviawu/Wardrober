/**
 * This will be my static creative application for a wordrobe selector
 * Author: Novia Wu
 * Date: 9/28/2021
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import AddItem from "./screens/AddItem";
import Home from "./screens/Home";

export default function App(props) {
  const Stack = createNativeStackNavigator();

  function WelcomeScreen() {
    return <Welcome />;
  }

  function HomeScreen() {
    return <Home />;
  }

  function AddItemScreen() {
    return <AddItem />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddItem" component={AddItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
