import {Text, View, Image, ImageBackground} from 'react-native';

const logoImage = require("./images/favicon.png")

export default function App() {
  return <View style={{flex: 1,backgroundColor:'plum', padding: 60}}>
   <Text>
    <Text style={{color: 'white'}}>Hello</Text> World!
    </Text>
    {/*
    <Image source={logoImage} style={{width: 300, height: 300}}></Image>
    <Image 
    source={{uri: 'https://picsum.photos/200/300'}} 
    style={{width: 300, height: 300}}

    /> */}
    <ImageBackground source={logoImage}>
      <Text>IMAGE TEXT</Text>
    </ImageBackground>
  </View>
}