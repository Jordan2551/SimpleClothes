import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {SHOP_ROUTE} from '../../components';

// TODO:: ADD CATEGORY NAVIGATION LINKS AFTER SETTING UP NAVIATION FOUNDATION
// TODO:: SET UP GH REPO FOR THIS


export const Home = ({navigation}) => {
  return (
    <View style={{paddingTop: 25}}>
      <Button onPress={() => navigation.navigate(SHOP_ROUTE, { screen: SHOP_ROUTE})}>Navigate Shop</Button>
    </View>
  );
};
