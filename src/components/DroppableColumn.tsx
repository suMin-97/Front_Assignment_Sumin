import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { ColumnStyledProps, DroppableColumnProps } from '@/types';
import DraggableItem from './DraggableItem';

const DroppableColumn = ({
  itemsContainer,
  columnId,
  isForbidden,
  isUsingDrag,
  selectedItems,
  handleItemClick,
}: DroppableColumnProps) => {
  return (
    <Droppable droppableId={columnId}>
      {(provided, snapshot) => (
        <Wrapper>
          <p>{columnId}</p>
          <Column
            id={columnId}
            ref={provided.innerRef}
            {...provided.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
            $isForbidden={isForbidden}
          >
            {itemsContainer[columnId].map((item, index) => (
              <DraggableItem
                key={item.id}
                item={item}
                index={index}
                isForbidden={isForbidden}
                isUsingDrag={isUsingDrag}
                selectedItems={selectedItems}
                handleItemClick={handleItemClick}
              />
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

const Column = styled.div<ColumnStyledProps>`
  border-radius: 6px;
  padding: 20px 20px 10px;
  background-color: ${(props) =>
    props.$isDraggingOver ? (props.$isForbidden ? 'lightpink' : 'lightgreen') : 'lightblue'};
  width: 100px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export default DroppableColumn;
