/**
 * This will be my static creative application for a wordrobe selector
 * Author: Novia Wu
 * Date: 9/28/2021
 */

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
}
