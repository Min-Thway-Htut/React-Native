import React from "react";
import {View, ScrollView, Image, StyleSheet, Text} from "react-native";
import ImageComponent from "./components/ImageComponent";
import UseColorScheme from "./components/UseColorScheme";
import UseWindowDimensions from "./components/UseWindowDimensions";

const Index = () => {
  return (
    <View>
      <UseWindowDimensions />
    </View>
  )
}

export default Index;