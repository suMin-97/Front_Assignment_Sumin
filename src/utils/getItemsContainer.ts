import { ItemsContainer } from '@/types';

export const getItemsContainer = (count: number): ItemsContainer => {
  const itemsContainer: ItemsContainer = {};

  for (let i = 1; i <= count; i++) {
    itemsContainer[`Column-${i}`] = [];
  }

  itemsContainer['Column-1'] = Array.from({ length: 10 }, (_, index) => ({
    id: `item-${index}`,
    content: `item ${index}`,
  }));

  return itemsContainer;
};
