import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Home} from '.';
import {HOME_ROUTE} from '../../components';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_ROUTE}>
      <Stack.Screen name={HOME_ROUTE} component={Home} />
    </Stack.Navigator>
  );
};
