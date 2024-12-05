import { useColorScheme } from "react-native";
import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";

const UseColorScheme = () => {
    const colorScheme = useColorScheme();

    return (
        <ScrollView
        style={[
            styles.container,
            colorScheme === 'light' 
            ? {backgroundColor: "#fff"}
            : {backgroundColor: "#333333"},
        ]}>
            {' '}
        <Image style={styles.logo}
        resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
        source={require('../images/little-lemon.png')}/>
        
        <Text>Color Scheme: {colorScheme}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        marginTop: 25,
    },
    logo: {
        height: 100,
        width: 300,
    }, 
    regular: {
        fontSize: 18,
        textAlign: 'center',
    }
})

export default UseColorScheme;