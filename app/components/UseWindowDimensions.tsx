import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';

const UseWindowDimensions = () => {
    const window = useWindowDimensions();
    return (
        <ScrollView style={styles.container}>
            <Image
            style={styles.logo}
            resizeMode="center"
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
            source={require('../images/little-lemon.png')}
            />
            <Text style={styles.title}>
                Little Lemon, your local Miditerranean Bistro
            </Text>

            <Text style={styles.regular}>Window Dimensions</Text>
            <Text style={styles.regular}>Height: {window.height}</Text>
            <Text style={styles.regular}>Width: {window.width}</Text>
            <Text style={styles.regular}>Font scale: {window.fontScale}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 24,
            marginTop: 25,
            backgroundColor: '#fff',
        },
        logo: {
            height: 100,
            width: 300,
            resizeMode: 'contain',
        },
        title: {
            marginTop: 16,
            paddingVertical: 10,
            color: "#333333",
            textAlign: "center",
            fontSize: 20,
            fontWeight: 'bold',
        },
        regular:{
            fontSize: 12,
            color: 'red',
        }
    }
)

export default UseWindowDimensions;