export interface ItemType {
  id: number;
  name: string;
  picture: string;
  description: string;
}

export interface CategoryType {
  id: number;
  name: string;
  picture: string;
  description: string;
  items: ItemType[];
}
