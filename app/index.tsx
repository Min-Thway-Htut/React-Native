import React from 'react';
import {useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

const FeedbackForm = () => {

  const [firstName, onChangeFirstName] = useState('First Name')

  return (
    <ScrollView style={styles.container} >
      <><Text style={styles.header}>Little Lemon</Text>
      <Text style={styles.secondHeader}>Welcome to Little Lemon</Text>
      <Text style={styles.paragraph}>Little Lemon is a charming neighborhood birstro that serves simple food and classic cocktails.</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={onChangeFirstName}/>
      </>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#121212',
  },
  header:{
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'red',
    paddingTop: 10,
    paddingBottom: 10,
    color: 'black'
    },
  secondHeader:{
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  },
  paragraph:{
    color: 'yellow',
    fontSize: 20,
    textAlign: 'center',
  },
  input: { 
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: 'EDEFEE', 
        backgroundColor: '#F4CE14', 
      }
})

export default FeedbackForm;