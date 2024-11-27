import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems';

// Define the Index component as a functional component with no props
const Index: React.FC = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <LittleLemonHeader />
        <Text style={styles.descriptionText}>
          Little Lemon is a charming neighborhood 
          bistro that serves simple food and classic cocktails in a 
          lively but casual environment. We would love to hear
          more about your experience with us!
        </Text>
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </>
  );
};

// Define styles for the component using StyleSheet.create
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  descriptionText: {
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  footerContainer: {
    backgroundColor: 'yellow',
  },
});

export default Index;

