import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Correct import
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './screens/MenuScreen';
import WelcomeScreen from './screens/WelcomeScreen';

type RootStackParamList = {
  Welcome: undefined; // No parameters passed to the Welcome screen
  Menu: undefined;    // No parameters passed to the Menu screen
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() { // Changed component name to `App` for convention
  return (
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerStyle: { backgroundColor: '#FBDABB' } }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
        />
      </Stack.Navigator>
  );
}
