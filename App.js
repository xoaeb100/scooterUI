import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigator/Navigation";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
