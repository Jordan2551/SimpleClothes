import React from 'react';
import {ScrollView} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {getCategoryData} from '../../api/categories/categories';
import {PRODUCT_ROUTE} from '../../components';
import {ItemCard, ItemCardList} from '../../components/item-card';

// TODO:: replace with API

export const Category = ({route}) => {

  const category = getCategoryData()[route.params.id];

  return (
    <ScrollView>
      <Title>{category.name}</Title>
      <Text>{category.description}</Text>
      <ItemCardList data={category.items} route={PRODUCT_ROUTE} />
    </ScrollView>
  );
};
