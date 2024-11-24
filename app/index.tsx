import {StyleSheet, Text, View, ScrollView} from "react-native";
import React, {useState} from 'react';

export default function Index() { 

  const [people, setPeople] = useState([
    {name: 'Person1', key: '1'},
    {name: 'Person2', key: '2'},
    {name: 'Person3', key: '3'},
    {name: 'Person4', key: '4'},
    {name: 'Person5', key: '5'},
    {name: 'Person6', key: '6'},
    {name: 'Person7', key: '7'},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView>
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
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});