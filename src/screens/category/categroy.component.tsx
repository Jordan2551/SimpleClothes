import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import {ScrollView} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {getCategoryData} from '../../api/categories';
import {PRODUCT_ROUTE} from '../../components';
import {ItemCard} from '../../components/item-card';

export const Category = ({route}) => {
  const {name, picture, products, description} = getCategoryData()[route?.params.id];

  const {navigate} = useNavigation();

  const navigateToProduct = useCallback((id: number) => {
      navigate(PRODUCT_ROUTE, {id});
    },
    [navigate],
  );

  return (
    <ScrollView>
      <Title>{name}</Title>
      <Text>{description}</Text>
      {products.map((item, index) => (
        <ItemCard
          cardPressFunction={() => {
            navigateToProduct(item.id);
          }}
          key={index}
          name={name}
          picture={picture}
        />
      ))}
    </ScrollView>
  );
};
