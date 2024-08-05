import { DraggableLocation } from 'react-beautiful-dnd';
import { Items, ItemsContainer } from '@/types';

export const reorder = (
  itemsContainer: ItemsContainer,
  source: DraggableLocation,
  destination: DraggableLocation,
  selectedItems: string[],
) => {
  const result: ItemsContainer = JSON.parse(JSON.stringify(itemsContainer));

  if (selectedItems.length === 0) {
    const [removed] = result[source.droppableId].splice(source.index, 1);
    result[destination.droppableId].splice(destination.index, 0, removed);
  } else {
    const newSelectedItems: Items = result[source.droppableId].filter((item) =>
      selectedItems.includes(item.id),
    );

    result[source.droppableId] = result[source.droppableId].filter(
      (item) => !selectedItems.includes(item.id),
    );

    result[destination.droppableId].splice(destination.index, 0, ...newSelectedItems);
  }

  return result;
};
