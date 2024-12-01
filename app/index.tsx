import React from 'react';
import {SectionList, Text, View, StyleSheet} from "react-native"


type User = {
  id: number,
  name: string,
  data:  string[];
};


const App: React.FC = () => {

  const users: User[]=[
    {
      id: 1,
      name: 'peter',
      data: ['php','js','java']
    },
    {
      id: 2,
      name: 'Sam',
      data: ['css','html','Bootstrap']
    },
    {
      id: 3,
      name: 'Bruce',
      data: ['JS', 'React JS', 'React Native']
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Section List in React-Native</Text>
      <SectionList
        sections={users}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={styles.sectionHeader}>{name}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 31,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionHeader: {
    color: 'red',
    fontSize: 25,
    marginVertical: 8,
  },
  item: {
    fontSize: 18,
    marginLeft: 16,
  },
});

export default App;