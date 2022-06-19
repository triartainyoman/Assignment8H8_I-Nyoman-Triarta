import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

const StackBottomTab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <StackBottomTab.Navigator>
        <StackBottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <StackBottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={26} />
            ),
          }}
        />
      </StackBottomTab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
