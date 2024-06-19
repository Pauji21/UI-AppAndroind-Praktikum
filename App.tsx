import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/LoginScreen.tsx";
import SecondScreen from "./screen/SecondScreen.tsx";
import ProfileScreen from "./screen/ProfileScreen.tsx";
import PromoItem from "./screen/PromoItem.tsx";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View } from "react-native-reanimated/lib/typescript/Animated";

const tabs = createBottomTabNavigator();
const MainTabNavigator = () => {
  return (
    <tabs.Navigator>
      <tabs.Screen 
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="house-damage" color="black" size={25} />
          ),
        }}
      />
      <tabs.Screen 
        name="Menu"
        component={SecondScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="server" color="black" size={25}/>
          ),
        }}
      />
    <tabs.Screen 
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({color, size}) => (
         <Icon name="user-shield" color="black" size={25}/>
        ),
      }}
    />
    </tabs.Navigator>
  );
};

export default function App () {
  return (
    <NavigationContainer>
      <MainTabNavigator/>
    </NavigationContainer>
  )
}

