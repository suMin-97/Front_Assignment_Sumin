import { Item, ItemsContainer } from './itemsContainerTypes';

export interface DroppableColumnProps {
  itemsContainer: ItemsContainer;
  columnId: string;
}

export interface DraggableItemProps {
  item: Item;
  index: number;
}
