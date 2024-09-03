import { useState, useCallback } from 'react';

interface DragAndDropResult<T> {
  dragging: T | null;
  handleDragStart: (event: React.DragEvent, item: T) => void;
  handleDragOver: (event: React.DragEvent) => void;
  handleDrop: (event: React.DragEvent, onDrop: (item: T) => void, removeItem: (item: T) => void) => void;
  handleDragEnd: () => void;
}

function useDragAndDrop<T>(): DragAndDropResult<T> {
  const [dragging, setDragging] = useState<T | null>(null);

  const handleDragStart = useCallback((event: React.DragEvent, item: T) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('application/json', JSON.stringify(item));
    setDragging(item);
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((event: React.DragEvent, onDrop: (item: T) => void, removeItem: (item: T) => void) => {
    event.preventDefault();
    const item = JSON.parse(event.dataTransfer.getData('application/json')) as T;
    onDrop(item);
    removeItem(item);
    setDragging(null);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDragging(null);
  }, []);

  return {
    dragging,
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnd,
  };
}

export default useDragAndDrop;
