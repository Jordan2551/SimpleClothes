import {CategoryType} from './types';

// TODO:: replace with API

const categoryData: CategoryType[] = [
  {
    id: 0,
    name: 'Shirts',
    picture: 'https://picsum.photos/500/400',
    description:
      'Ipsum nulla sunt voluptate anim sunt nisi quis veniam dolore anim incididunt. Culpa pariatur do nostrud ad. Aliqua amet quis ullamco proident in ullamco occaecat labore aliqua in laboris non laborum laborum.',
    items: [
      {
        id: 0,
        name: 'Pink Shirt',
        price: 55,
        picture: 'https://picsum.photos/500/400',
      },
      {
        id: 1,
        name: 'Blue Shirt',
        price: 55,
        picture: 'https://picsum.photos/500/400',
      },
      {
        id: 2,
        name: 'Black Shirt',
        price: 55,
        picture: 'https://picsum.photos/500/400',
      },
    ],
  },
  {
    id: 1,
    name: 'Jackets',
    picture: 'https://picsum.photos/500/400',
    description:
      'Ipsum nulla sunt voluptate anim sunt nisi quis veniam dolore anim incididunt. Culpa pariatur do nostrud ad. Aliqua amet quis ullamco proident in ullamco occaecat labore aliqua in laboris non laborum laborum.',
      items: [
        {
          id: 0,
          name: 'Pink Shirt',
          price: 55,
          picture: 'https://picsum.photos/500/400',
        },
    ],
    },
  {
    id: 2,
    name: 'Pants',
    picture: 'https://picsum.photos/500/400',
    description:
      'Ipsum nulla sunt voluptate anim sunt nisi quis veniam dolore anim incididunt. Culpa pariatur do nostrud ad. Aliqua amet quis ullamco proident in ullamco occaecat labore aliqua in laboris non laborum laborum.',
      items: [
        {
          id: 0,
          name: 'Pink Shirt',
          price: 55,
          picture: 'https://picsum.photos/500/400',
        },
      
      ],
    },
  {
    id: 3,
    name: 'Boots',
    picture: 'https://picsum.photos/500/400',
    description:
      'Ipsum nulla sunt voluptate anim sunt nisi quis veniam dolore anim incididunt. Culpa pariatur do nostrud ad. Aliqua amet quis ullamco proident in ullamco occaecat labore aliqua in laboris non laborum laborum.',
    items: [],
  },
];


// TODO:: REPLACE WITH REDUX, RESELECT, CREATESELECTOR, ETC
export const getCategoryData = (): CategoryType[] => {
  return categoryData.map(category => category);
}
