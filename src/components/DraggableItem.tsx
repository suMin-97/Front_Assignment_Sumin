import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { DraggableItemProps } from '@/types';

const DraggableItem = ({ item, index }: DraggableItemProps) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Item
          id={item.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {item.content}
        </Item>
      )}
    </Draggable>
  );
};

const Item = styled.div<{ isDragging: boolean }>`
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  background: ${(props) => (props.isDragging ? 'green' : 'lightgray')};
  color: black;
  padding: 5px 10px;
  margin-bottom: 10px;
  &:hover {
    border: 1px solid black;
  }
`;

export default DraggableItem;
