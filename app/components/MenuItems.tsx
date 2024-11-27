import React from 'react';
import { View, Text, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native';

// Defining the type for the menu item
interface MenuItem {
  name: string;
  id: string;
}

// Sample menu data with types
const menuItemsToDisplay: MenuItem[] = [
  {name: 'Hummus', id: '1A'},
  {name: 'Moutabal', id: '2B'},
  {name: 'Falafel', id: '3C'},
  {name: 'Shawarma', id: '4D'},
  {name: 'Tabbouleh', id: '5E'},
  {name: 'Fattoush', id: '6F'},
  {name: 'Baba Ganoush', id: '7G'},
  {name: 'Kibbeh', id: '8H'},
  {name: 'Mansaf', id: '9I'},
  {name: 'Makdous', id: '10J'},
  {name: 'Sfiha', id: '11K'},
  {name: 'Samak Mashwi', id: '12L'},
  {name: 'Kofta', id: '13M'},
  {name: 'Mujadara', id: '14N'},
  {name: 'Meze', id: '15O'},
  {name: 'Koshari', id: '16P'},
  {name: 'Arayes', id: '17Q'},
  {name: 'Bourekas', id: '18R'},
  {name: 'Zaatar Bread', id: '19S'},
  {name: 'Moussaka', id: '20T'},
  {name: 'Labneh', id: '21U'},
  {name: 'Harira', id: '22V'},
  {name: 'Rakakat', id: '23W'},
  {name: 'Sambousek', id: '24X'},
  {name: 'Borek', id: '25Y'},
  {name: 'Tahini', id: '26Z'},
  {name: 'Shakshuka', id: '27A1'},
  {name: 'Foul Medames', id: '28B2'},
  {name: 'Knafeh', id: '29C3'},
  {name: 'Mahshi', id: '30D4'},
  {name: 'Mutabbal', id: '31E5'},
  {name: 'Qatayef', id: '32F6'},
  {name: 'Tzatziki', id: '33G7'},
  {name: 'Moussaka', id: '34H8'}
];

// Item component with typed props
const Item: React.FC<{ name: string }> = ({ name }) => (
  <View>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

// MenuItems component with typed FlatList
const MenuItems: React.FC = () => {
  const renderItem = ({ item }: ListRenderItemInfo<MenuItem>) => <Item name={item.name} />;
  
  return (
    <View>
      <Text>View Menu</Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

// Styles for the components
const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 36,
  },
});

export default MenuItems;
