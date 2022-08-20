import {data} from './data';
import { ProductType } from './products';
// TODO:: replace with API

export interface CategoryType {
  id: number;
  name: string;
  picture: string;
  description: string;
  products: ProductType[];
}

// TODO:: REPLACE WITH REDUX, RESELECT, CREATESELECTOR, ETC
export const getCategoryData = (): CategoryType[] => {
  return data.map(category => category);
}
