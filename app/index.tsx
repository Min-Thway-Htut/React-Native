import * as React from 'react';
import {View, Text} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import MenuItems from './components/MenuItems'

export default function Index(){
  return (
    <>
    <View
    style={{flex:1, backgroundColor: '#495E57'}}>
         <LittleLemonHeader />
         <Text style={{color:'white',textAlign:'center',margin:'10px'}}>Little Lemon is a charming neighborhood 
          bistro that serves simple food and classic cocktailss in a 
          lively but casual environment. We would love to hear
          more about your experience with us!
         </Text>
         <MenuItems />
    </View>
    <View style={{backgroundColor: "yellow"}}>
      <Footer />
    </View>
    </>
  )
}
