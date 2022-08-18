import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Card} from 'react-native-paper';
import { ItemType } from '../../api/categories/types';

export interface ItemCardProps {
  data: ItemType;
  route: string;
}

export const ItemCard = ({route, data}: ItemCardProps) => {
  const navigation = useNavigation();

  return (
    <Card
      onPress={() => {
        navigation.navigate(route, {id: data.id});
      }}>
      <Card.Title title={data.name} />
      <Card.Cover source={{uri: data.picture}} />
    </Card>
  );
};
