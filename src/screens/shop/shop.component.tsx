import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import {ScrollView, View} from 'react-native';
import { Text, Title } from 'react-native-paper';
import { getCategoryData } from '../../api/categories';
import {CATEGORY_ROUTE} from '../../components';
import { ItemCard, ItemCardList } from '../../components/item-card';

export const Shop = () => {
  const {navigate} = useNavigation();

  const navigateToCategories = useCallback((id: number) => {
      navigate(CATEGORY_ROUTE, {id});
    },
    [navigate],
  );

  const categories = getCategoryData();

  return (
    <ScrollView>
      {categories.map(({id, name, picture}, index) => {
        return (
          <View>
            <ItemCard
              cardPressFunction={() => {
                navigateToCategories(id);
              }}
              key={index}
              name={name}
              picture={picture}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};
