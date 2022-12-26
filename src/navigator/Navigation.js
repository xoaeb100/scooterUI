import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

const HomeStackNavigator = () => {
  return (
    // <Stack.Navigator screenOptions={screenOptionStyle}>
    //   <Stack.Screen name="Home" component={Home} />
    //   <Stack.Screen name="Detail" component={Detail} />
    // </Stack.Navigator>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: "white" },
        tabBarItemStyle: { width: 100, color: "#E2443B" },
        tabBarStyle: { backgroundColor: "#E2443B" },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>
  );
};

export default HomeStackNavigator;
