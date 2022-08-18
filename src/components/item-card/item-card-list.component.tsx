import React from 'react';
import {ScrollView, View} from 'react-native';
import {Title} from 'react-native-paper';
import {ItemCard} from '.';
import { ItemType } from '../../api/categories/types';

export interface ItemCardListProps {
  route: string;
  title: string;
  data: ItemType[];
}

export const ItemCardList = ({route, data}: ItemCardListProps) => {
  return (
    <ScrollView>
      {data.map((item, index) => (
        <View>
          <ItemCard route={route} key={index} data={item} />
        </View>
      ))}
    </ScrollView>
  );
};
