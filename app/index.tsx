import {StyleSheet, Text, View, TextInput} from "react-native";
import React, {useState} from 'react';

export default function Index() {

  const [name, setName] = useState('Min');
  const [age, setAge] = useState('0');
  
 
  
  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput multiline 
      style={styles.input} placeholder='Enter your name' onChangeText={(val) => setName(val)}/>
    
       <Text>Enter age:</Text>
       <TextInput style={styles.input} keyboardType="numeric" placeholder='Enter your age' onChangeText={(val) => setAge(val)}></TextInput>
      <Text>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});