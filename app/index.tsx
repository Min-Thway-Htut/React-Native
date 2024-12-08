import * as React from 'react';
import { NavigationContainer as RNNavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuScreen from './components/screens/MenuScreen';
import WelcomeScreen from './components/DarkAndWhiteTheme';

// Define the types for the stack navigator
type RootStackParamList = {
  Welcome: undefined;
  Menu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationContainer: React.FC = () => {
  return (
    <RNNavigationContainer>
      <Stack.Navigator initialRouteName="Welcome"
        screenOptions={{headerStyle: {backgroundColor: '#FBDABB'}}}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </RNNavigationContainer>
  );
};

export default NavigationContainer;
