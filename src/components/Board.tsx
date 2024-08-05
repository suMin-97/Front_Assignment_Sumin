import { useCallback, useMemo, useState } from 'react';
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
    columnItemCounts,
    handleColumnCountUp,
    handleColumnCountDown,
    itemsContainer,
    setItemsContainer,
  } = useColumnCounterWithItems();

  const [isForbidden, setIsForbidden] = useState<boolean>(false);

  const onDragEnd: OnDragEndResponder = useCallback(
    (result) => {
      const { source, destination } = result;

      if (isForbidden) {
        setIsForbidden(false);
        return;
      }
      if (!destination) return;

      const newItemsContainer = reorder(itemsContainer, source, destination);
      setItemsContainer(newItemsContainer);
      setIsForbidden(false);
    },
    [itemsContainer, isForbidden, setIsForbidden],
  );

  const onDragUpdate: OnDragUpdateResponder = useCallback(
    (result) => {
      const { source, destination } = result;

      if (!destination) {
        setIsForbidden(false);
        return;
      }

      const isSameColumn = source.droppableId === destination.droppableId;
      const isSameLocation = isSameColumn && source.index === destination.index;
      const isLastItemInDestination =
        columnItemCounts[destination.droppableId] === destination.index + (isSameColumn ? 1 : 0);
      const isOddIndexToOddIndex = source.index % 2 === 1 && destination.index % 2 === 1;
      const isColumn1ToColumn3 =
        source.droppableId === 'Column-1' && destination.droppableId === 'Column-3';

      if (isColumn1ToColumn3) {
        setIsForbidden(true);
      } else if (isSameLocation) {
        setIsForbidden(false);
      } else if (isLastItemInDestination) {
        setIsForbidden(false);
      } else if (isOddIndexToOddIndex) {
        setIsForbidden(true);
      } else {
        setIsForbidden(false);
      }
    },
    [columnItemCounts],
  );

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
            <DroppableColumn
              key={key}
              itemsContainer={itemsContainer}
              columnId={key}
              isForbidden={isForbidden}
            />
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
