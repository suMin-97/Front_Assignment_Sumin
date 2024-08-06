import { useState } from 'react';

export const useMultiDrag = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedColumn, setSelectedColumn] = useState<string>('');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number[]>([]);
  const [isUsingDrag, setIsUsingDrag] = useState<boolean>(false);

  const handleItemClick = (selectedId: string, columnId: string, index: number) => {
    if (selectedColumn === columnId) {
      setSelectedItems((prev) =>
        prev.includes(selectedId)
          ? prev.filter((itemId) => itemId !== selectedId)
          : [...prev, selectedId],
      );
      setSelectedItemIndex((prev) =>
        prev.includes(index) ? prev.filter((idx) => idx !== index) : [...prev, index],
      );
    } else {
      setSelectedItems([selectedId]);
      setSelectedItemIndex([index]);
      setSelectedColumn(columnId);
    }
  };

  return {
    selectedItems,
    selectedItemIndex,
    isUsingDrag,
    setSelectedItems,
    setSelectedItemIndex,
    setIsUsingDrag,
    handleItemClick,
  };
};
