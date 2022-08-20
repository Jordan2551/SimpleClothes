import { getCategoryData } from './categories';

export interface ProductType {
  id: number;
  name: string;
  picture: string;
  description: string;
}

export const getProductData = (id: Number): ProductType => {
  const categories = getCategoryData();
  let foundProduct;

  categories.forEach(category => {
    category.products.forEach(product => {
      if (product.id === id){
        foundProduct = product; 
      }
    })
  })

  return foundProduct;
};