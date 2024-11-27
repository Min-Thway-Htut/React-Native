import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha'
];

const MenuItems = () => {
    return(
        <View style={menuStyles.container}>
            <ScrollView
            horizontal={false}
            indicatorStyle={'white'}
            style={menuStyles.innerContainer}>
                <Text style={menuStyles.headerText}>View Menu</Text>
                <Text style={menuStyles.itemText}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
}

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
    }
})
export default MenuItems;