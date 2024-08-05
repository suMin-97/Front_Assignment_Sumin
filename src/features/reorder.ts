import { DraggableLocation } from 'react-beautiful-dnd';
import { ItemsContainer } from '@/types';

export const reorder = (
  itemsContainer: ItemsContainer,
  source: DraggableLocation,
  destination: DraggableLocation,
) => {
  const result = JSON.parse(JSON.stringify(itemsContainer));

  const [removed] = result[source.droppableId].splice(source.index, 1);
  result[destination.droppableId].splice(destination.index, 0, removed);

  return result;
};
