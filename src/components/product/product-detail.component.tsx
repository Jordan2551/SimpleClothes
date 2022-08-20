import React, { useCallback } from 'react';
import { getProductData } from '../../api/products';
import {ItemCard} from '../../components/item-card';

export const ProductDetail = ({route}) => {
   const {name, description, picture } = getProductData(route?.params.id);
   
    return (
      <ItemCard name={name} description={description} picture={picture} />
    )

}