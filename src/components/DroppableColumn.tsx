import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { DroppableColumnProps } from '@/types';
import DraggableItem from './DraggableItem';

const DroppableColumn = ({ itemsContainer, columnId }: DroppableColumnProps) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => (
        <Wrapper>
          <p>{columnId}</p>
          <Column
            id={columnId}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {itemsContainer[columnId].map((item, index) => (
              <DraggableItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </Column>
        </Wrapper>
      )}
    </Droppable>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Column = styled.div<{ isDraggingOver: boolean }>`
  border-radius: 6px;
  padding: 20px 20px 10px;
  background-color: ${(props) => (props.isDraggingOver ? 'lightgreen' : 'lightblue')};
  width: 100px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export default DroppableColumn;
