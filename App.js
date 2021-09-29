/**
 * This will be my static creative application for a wordrobe selector
 * Author: Novia Wu
 * Date: 9/28/2021
 */

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./components/Welcome";
import Wardrobe from "./components/Wardrobe";

export default function App() {
  const Stack = createNativeStackNavigator();

  function WelcomeScreen() {
    return <Welcome />;
  }

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  function WardrobeScreen() {
    return <Wardrobe />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wardrobe">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Wardrobe" component={WardrobeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
