import * as React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Menu: undefined; // No parameters passed to the Menu screen
};

type MovingBetweenScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Menu'
>;

type Props = {
  navigation: MovingBetweenScreenNavigationProp;
};

const MovingBetweenScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#0066cc',
  },
});

export default MovingBetweenScreen;
