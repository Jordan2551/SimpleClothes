import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {getCategoryData} from '../../api/categories/categories';
import { ItemCardList, PRODUCT_ROUTE } from '../../components';

export interface categoryProps {
  id: number;
}

// TODO:: replace with API

export const Product = ({route}) => {

  const category = getCategoryData()[route.params.id];

  return (
    <ScrollView>
      <Title>{category.name}</Title>
      <Text>{category.description}</Text>
      <ItemCardList route={PRODUCT_ROUTE} />
    </ScrollView>
  );
};
