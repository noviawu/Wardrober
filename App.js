/**
 * This will be my static creative application for a wordrobe selector
 * Author: Novia Wu
 * Date: 12/6/2021
 */

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppContext } from "./AppContext";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import AddItem from "./screens/AddItem";

export default function App(props) {
  const Stack = createNativeStackNavigator();
  const [user, setUser] = useState("");

  function WelcomeScreen() {
    return <Welcome />;
  }

  function HomeScreen() {
    return <Home />;
  }

  function AddItemScreen() {
    return <AddItem />;
  }

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "#E89941",
      accent: "#f1c40f",
    },
  };

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
    <AppContext.Provider value={user}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AddItem" component={AddItemScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </AppContext.Provider>
  );
}
