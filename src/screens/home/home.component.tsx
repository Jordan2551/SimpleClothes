import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {categoryData} from '../../api/categories/categories';
import { CategoryType } from '../../api/categories/types';
import {Categories} from '../../components';

// TODO:: replace with API
const getData = () => {
  return categoryData.map((category: string) => ({name: category} as CategoryType));
};

// TODO:: ADD CATEGORY NAVIGATION LINKS AFTER SETTING UP NAVIATION FOUNDATION
// TODO:: SET UP GH REPO FOR THIS
export const Home = () => {
    return (<View>
        <Text>Home</Text>
        <Categories title="New Styles" categories={getData()} />
        </View>);
};
