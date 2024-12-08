import * as React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MenuScreen from "./components/screens/MenuScreen";
import WelcomeScreen from "./components/screens/WelcomeScreen";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function App(){
  return(
       <Tab.Navigator
       screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Welcome'){
            iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          }else if (route.name === 'Menu'){
            iconName = 'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
       })}
       >
      <Tab.Screen name='Welcome' component={WelcomeScreen}></Tab.Screen>
      <Tab.Screen name='Menu' component={MenuScreen}></Tab.Screen>
    </Tab.Navigator>
  )
} 
