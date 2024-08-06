import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { DraggableItemProps, ItemStyledProps } from '@/types';

const DraggableItem = ({
  item,
  index,
  columnId,
  isForbidden,
  isUsingDrag,
  selectedItems,
  handleItemClick,
}: DraggableItemProps) => {
  const isSelected = selectedItems.includes(item.id);

  const handleSelect = () => {
    handleItemClick(item.id, columnId, index);
  };

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Item
          id={item.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={handleSelect}
          $isDragging={snapshot.isDragging}
          $isForbidden={isForbidden}
          $isUsingDrag={isUsingDrag}
          $isSelected={isSelected}
        >
          {item.content}
        </Item>
      )}
    </Draggable>
  );
};

const Item = styled.div<ItemStyledProps>`
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  background: ${(props) =>
    props.$isDragging
      ? props.$isForbidden
        ? 'red'
        : props.$isSelected
          ? 'blue'
          : 'green'
      : props.$isSelected
        ? props.$isForbidden
          ? 'red'
          : props.$isUsingDrag
            ? '#0000ff7d'
            : 'blue'
        : 'lightgray'};
  color: black;
  padding: 5px 10px;
  margin-bottom: 10px;
  &:hover {
    border: 1px solid black;
  }
`;

export default DraggableItem;
