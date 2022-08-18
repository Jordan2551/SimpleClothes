import React from 'react';
import {View} from 'react-native';
import {getCategoryData} from '../../api/categories/categories';
import {CATEGORY_ROUTE} from '../../components';
import { ItemCardList } from '../../components/item-card';

export const Shop = () => {
  return (
    <View>
      <ItemCardList
        title="New Styles"
        route={CATEGORY_ROUTE}
        data={getCategoryData()}
      />
    </View>
  );
};
