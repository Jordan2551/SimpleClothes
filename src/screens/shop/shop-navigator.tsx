import React from 'react';
import {Category} from '../category';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CATEGORY_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE} from '../../components';
import {Shop} from '.';

const Stack = createNativeStackNavigator();

export const ShopNavigator = () => {
  return (
    // TODO:: DOES SHOP SCREEN RENDER WHEN NAVIGATING FROM HOME -> CATEGORY?
    <Stack.Navigator initialRouteName={SHOP_ROUTE}>
      <Stack.Screen name={SHOP_ROUTE} component={Shop} />
      <Stack.Screen name={CATEGORY_ROUTE} component={Category} />
      {/* <Stack.Screen name={PRODUCT_ROUTE} component={Peo} /> */}
    </Stack.Navigator>
  );
};
