import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Pressable, SectionListData, SectionListRenderItem } from 'react-native';

type MenuItem = {
  title: string;
  data: string[];
};

const menuItemsToDisplay: MenuItem[] = [
  {
    title: 'Appetizers',
    data: ['Hummus', 'Moutabal', 'Falafel', 'Marinated Olives', 'Kofta', 'Eggplant Salad'],
  },
  {
    title: 'Main Dishes',
    data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
  },
  {
    title: 'Sides',
    data: ['Fries', 'Buttered Rice', 'Bread Sticks', 'Pita Pocket', 'Lentil Soup', 'Greek Salad', 'Rice Pilaf'],
  },
  {
    title: 'Desserts',
    data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
  },
];

const Separator: React.FC = () => <View style={menuStyles.separator} />;

const Footer: React.FC = () => (
  <Text style={menuStyles.footerText}>All Rights Reserved by Little Lemon 2024</Text>
);

type ItemProps = {
  name: string;
};

const Item: React.FC<ItemProps> = ({ name }) => (
  <View>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const MenuItems: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const renderItem: SectionListRenderItem<string> = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section }: { section: SectionListData<string> }) => (
    <Text style={menuStyles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={menuStyles.container}>
      {!showMenu && (
        <Text style={menuStyles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but
          casual environment. View our menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyles.button}
        onPress={() => setShowMenu((prevState) => !prevState)}
      >
        <Text style={menuStyles.buttonText}>{showMenu ? 'Home' : 'View Menu'}</Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}
        />
      )}
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#333333',
  },
  sectionHeader: {
    backgroundColor: '#fbdabb',
    color: '#333333',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});

export default MenuItems;
