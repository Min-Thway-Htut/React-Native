import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const menuItemsToDisplay = [
    'Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha Hummus \n Moutabal \n Falafel \n Cheery \n Mine \n Haha'
];

const MenuItems = () => {
    return(
        <View style={{flex: 0.75}}>
            <ScrollView
            style={{padding: 40, backgroundColor: 'gray'}}>
                <Text>View Menu</Text>
                <Text style={{fontSize: 20, flexWrap: 'wrap', color: 'white'}}>{menuItemsToDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
}

export default MenuItems;