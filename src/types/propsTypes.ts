import { Item, ItemsContainer } from './itemsContainerTypes';

export interface DroppableColumnProps {
  itemsContainer: ItemsContainer;
  columnId: string;
  isForbidden: boolean;
}

export interface DraggableItemProps {
  item: Item;
  index: number;
  isForbidden: boolean;
}

export interface ColumnCounterButtonsProps {
  columnCount: number;
  handleColumnCountUp: VoidFunction;
  handleColumnCountDown: VoidFunction;
}
