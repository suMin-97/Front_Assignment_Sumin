import { useCallback } from 'react';
import { DragDropContext, OnDragEndResponder, OnDragUpdateResponder } from 'react-beautiful-dnd';
import DroppableColumn from './DroppableColumn';
import { useAnimationEnabled, useColumnCounterWithItems } from '@/hooks';
import { reorder } from '@/features';

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
    <div>
      <button type="button" onClick={handleColumnCountUp} disabled={columnCount === 4}>
        Colum 추가하기
      </button>
      <button type="button" onClick={handleColumnCountDown} disabled={columnCount === 1}>
        Colum 제거하기
      </button>
      <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
        <div>
          {Object.keys(itemsContainer).map((key) => (
            <DroppableColumn key={key} itemsContainer={itemsContainer} columnId={key} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};
