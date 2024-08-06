import { Item, ItemsContainer } from './itemsContainerTypes';

export interface DroppableColumnProps {
  itemsContainer: ItemsContainer;
  columnId: string;
  isForbidden: boolean;
  isUsingDrag: boolean;
  selectedItems: string[];
  handleItemClick: (selectedId: string, columnId: string, index: number) => void;
}

export interface DraggableItemProps {
  item: Item;
  index: number;
  columnId: string;
  isForbidden: boolean;
  isUsingDrag: boolean;
  selectedItems: string[];
  handleItemClick: (selectedId: string, columnId: string, index: number) => void;
}

export interface ColumnCounterButtonsProps {
  columnCount: number;
  handleColumnCountUp: VoidFunction;
  handleColumnCountDown: VoidFunction;
}
