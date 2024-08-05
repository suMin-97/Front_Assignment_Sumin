import { useEffect, useState } from 'react';
import { ItemsContainer } from '@/types';
import { getItemsContainer } from '@/utils';

export const useColumnCounterWithItems = () => {
  const [columnCount, setColumnCount] = useState<number>(1);
  const [itemsContainer, setItemsContainer] = useState<ItemsContainer>(
    getItemsContainer(columnCount),
  );

  useEffect(() => {
    setItemsContainer(getItemsContainer(columnCount));
  }, [columnCount]);

  const handleColumnCountUp = () => {
    if (1 <= columnCount && columnCount < 4) {
      setColumnCount(columnCount + 1);
    }
  };
  const handleColumnCountDown = () => {
    if (1 < columnCount && columnCount <= 4) {
      setColumnCount(columnCount - 1);
    }
  };

  return {
    columnCount,
    handleColumnCountUp,
    handleColumnCountDown,
    itemsContainer,
    setItemsContainer,
  };
};
