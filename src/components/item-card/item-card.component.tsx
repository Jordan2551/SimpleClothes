import React from 'react';
import {Card, Paragraph} from 'react-native-paper';
export interface ItemCardProps {
  name: string;
  picture: string;
  description?: string;
  cardPressFunction?: () => void;
}

export const ItemCard = ({
  cardPressFunction,
  name,
  picture,
  description,
}: ItemCardProps) => {
  return (
    <Card onPress={cardPressFunction ? cardPressFunction : () => {}}>
      <Card.Title title={name} />
      <Card.Cover source={{uri: picture}} />
      {description && (
          <Card.Content>
            <Paragraph>{description}</Paragraph>
          </Card.Content>
      )}

    </Card>
  );
};
