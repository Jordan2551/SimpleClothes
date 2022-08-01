import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ShopNavigator} from './src/screens/shop/shop-navigator';
import {HomeNavigator} from './src/screens/home/home-navigator';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          activeColor="#ffff"
          barStyle={{backgroundColor: 'indigo'}}>
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              tabBarLabel: 'Home',
              // tabBarIcon: ({color}) => (
              //   <Icon icon="bell" color={color} size={26} />
              // ),
            }}
          />
          <Tab.Screen
            name="Shop"
            component={ShopNavigator}
            options={{
              tabBarLabel: 'Shop',
              // tabBarIcon: ({color}) => (
              //   <Icon icon="bell" color={color} size={26} />
              // ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
