import { useCallback } from 'react';
import styled from 'styled-components';
import { DragDropContext, OnDragEndResponder, OnDragUpdateResponder } from 'react-beautiful-dnd';
import DroppableColumn from './DroppableColumn';
import { useAnimationEnabled, useColumnCounterWithItems } from '@/hooks';
import { reorder } from '@/features';
import ColumnCounterButtons from './ColumnCounterButtons';

export const Board = () => {
  const enabled = useAnimationEnabled();
  const {
    columnCount,
    handleColumnCountUp,
    handleColumnCountDown,
    itemsContainer,
    setItemsContainer,
  } = useColumnCounterWithItems();

  const onDragEnd: OnDragEndResponder = useCallback(
    (result) => {
      const { source, destination } = result;

      if (!destination) return;

      const newItemsContainer = reorder(itemsContainer, source, destination);
      setItemsContainer(newItemsContainer);
    },
    [itemsContainer],
  );

  const onDragUpdate: OnDragUpdateResponder = () => {};

  if (!enabled) {
    return null;
  }

  return (
    <Main>
      <ColumnCounterButtons
        columnCount={columnCount}
        handleColumnCountUp={handleColumnCountUp}
        handleColumnCountDown={handleColumnCountDown}
      />
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <ColumnsContainer>
          {Object.keys(itemsContainer).map((key) => (
            <DroppableColumn key={key} itemsContainer={itemsContainer} columnId={key} />
          ))}
        </ColumnsContainer>
      </DragDropContext>
    </Main>
  );
};

const Main = styled.main`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ColumnsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
