import React from "react";
import { View, Text, StyleSheet, SectionList, SectionListData } from "react-native";

type MenuItem = {
  title: string;
  data: string[];
};

const menuItemsToDisplay: MenuItem[] = [
  {
    title: "Appetizers",
    data: ["Hummus", "Moutabal", "Falafel", "Marinated Olives", "Kofta", "Eggplant Salad"],
  },
  {
    title: "Sides",
    data: ["Fries", "Buttered Rice", "Bread Sticks", "Pita Pocket", "Lentil Soup", "Greek Salad", "Rice Pilaf"],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

type ItemProps = {
  name: string;
};

const Item: React.FC<ItemProps> = ({ name }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
  </View>
);

const Separator: React.FC = () => <View style={menuStyles.separator} />;

const Footer: React.FC = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

const MenuItems: React.FC = () => {
  const renderItem = ({ item }: { item: string }) => <Item name={item} />;

  const renderSectionHeader = ({ section }: { section: SectionListData<string> }) => (
    <Text style={menuStyles.sectionHeader}>{section.title}</Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}
      />
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
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
});

export default MenuItems;
