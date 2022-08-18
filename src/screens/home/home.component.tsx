import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {CATEGORY_ROUTE, SHOP_ROUTE} from '../../components';

export const Home = ({navigation}) => {
  return (
    <View style={{paddingTop: 25}}>
      <Button
        onPress={() => navigation.navigate(SHOP_ROUTE, {screen: SHOP_ROUTE})}>
        Navigate Shop
      </Button>
      <Button
        onPress={() =>
          navigation.navigate(SHOP_ROUTE, {
            screen: CATEGORY_ROUTE,
            params: {id: 0},
          })
        }>
        Navigate CATEGORY
      </Button>
    </View>
  );
};
