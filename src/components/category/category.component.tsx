import React from 'react';
import { View } from "react-native"
import { Divider, Text, Title } from "react-native-paper"
import { CategoryType } from '../../api/categories/types';

export interface categoryProps {
  name: string;
}

export interface categoriesProps {
  title: string;
  categories: CategoryType[];
}

export const Category = ({name}: categoryProps) => {
  return (
    <View>
      <Text>CATEGORY: {name}</Text>
    </View>
  );
};

export const Categories = ({title, categories}: categoriesProps) => {
  return (
    <View>
      <Title>{title}</Title>
      {categories.map(category => {
          return (
              <View>
                  <Category name={category.name} />
                  <Divider />
              </View>
          );
      })}
      </View>
    )
};