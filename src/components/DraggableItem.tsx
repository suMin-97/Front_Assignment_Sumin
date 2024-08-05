import { Draggable } from 'react-beautiful-dnd';
import { DraggableItemProps } from '@/types';

const DraggableItem = ({ item, index }: DraggableItemProps) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          id={item.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableItem;
