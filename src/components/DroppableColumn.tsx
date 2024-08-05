import { Droppable } from 'react-beautiful-dnd';
import { DroppableColumnProps } from '@/types';
import DraggableItem from './DraggableItem';

const DroppableColumn = ({ itemsContainer, columnId }: DroppableColumnProps) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div id={columnId} ref={provided.innerRef} {...provided.droppableProps}>
          {itemsContainer[columnId].map((item, index) => (
            <DraggableItem key={item.id} item={item} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableColumn;
