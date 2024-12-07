import React from "react";
import {View, ScrollView, Image, StyleSheet, Text} from "react-native";
import ImageComponent from "./components/ImageComponent";
import UseColorScheme from "./components/UseColorScheme";
import UseWindowDimensions from "./components/UseWindowDimensions";
import WelcomeScreen from "./components/DarkAndWhiteTheme";
import NavigationContainer from "./components/NavigationContainer";

const Index = () => {
  return (
    <View>
      <WelcomeScreen />
    </View>
  )
}

export default Index;