import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader(){
  return(
    <View style={{flex: 0.2, backgroundColor: '#F4CE14'}} numberOfLines={1}>
      <Text>Welcome to <Text style={{fontWeight: 'bold'}}>Little Lemon</Text>
      </Text>
    </View>
  );
}