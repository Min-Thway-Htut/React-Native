import React from "react";
import { ScrollView, Image, StyleSheet, Text, ViewStyle } from "react-native";

const ImageComponent: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <Image 
            style={styles.logo}
            resizeMode = "contain"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
            source={require('../images/little-lemon.png')} />
      
         <Text style={styles.title}>
            Little Lemon, your local restaurant
         </Text>

         <Image 
         style={styles.image}
         source={require('../images/food-pic-1.webp')}
         resizeMode="cover"
         />

         
<Image 
         style={styles.image}
         source={require('../images/food-pic-2.webp')}
         resizeMode="cover"
         />

<Image 
         style={styles.image}
         source={require('../images/food-pic-3.webp')}
         resizeMode="cover"
         />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
        backgroundColor: '#fff',
    },
    logo: {
        height: 100,
        width: 350,
    },
    title: {
        marginTop: 16,
        paddingVertical: 10,
        color: '#333333',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    image:{
        width: 350,
        height: 250,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});

export default ImageComponent;
