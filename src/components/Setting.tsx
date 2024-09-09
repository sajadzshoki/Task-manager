// import React from 'react'

// const Setting = () => {
//   return (
//     <div className="flex justify-center items-center h-[80%]">
//       <p className="font-semibold text-5xl text-blue-600 animate-pulse">Comming soon . . .</p>
//     </div>
//   )
// }

// export default Setting
import React, { useState } from 'react';
import useDragAndDrop from '../hooks/DragnDrop';


interface Item {
  id: number;
  name: string;
}

interface DraggableItemProps {
  item: Item;
  onDrop: (item: Item) => void;
  removeItem: (item: Item) => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ item, onDrop, removeItem }) => {
  const { handleDragStart, handleDragOver, handleDrop, handleDragEnd } = useDragAndDrop<Item>();

  return (
    <div
      draggable
      onDragStart={(event) => handleDragStart(event, item)}
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, onDrop, removeItem)}
      onDragEnd={handleDragEnd}
      style={{
        padding: '10px',
        margin: '10px',
        border: '1px solid #ccc',
        cursor: 'move',
        backgroundColor: 'lightblue',
      }}
    >
      {item.name}
    </div>
  );
};

interface DropZoneProps {
  onDrop: (item: Item) => void;
}

const DropZone: React.FC<DropZoneProps> = ({ onDrop }) => {
  const { handleDragOver, handleDrop } = useDragAndDrop<Item>();

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={(event) => handleDrop(event, onDrop, () => {})}
      style={{
        padding: '50px',
        margin: '10px',
        border: '2px dashed #ccc',
        backgroundColor: '#f0f0f0',
      }}
    >
      Drop items here
    </div>
  );
};

const DragAndDropContainer: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const handleDrop = (item: Item) => {
    console.log('Dropped item:', item);
    // You can handle dropped item here
  };

  const removeItem = (item: Item) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  return (
    <div>
      {items.map((item) => (
        <DraggableItem key={item.id} item={item} onDrop={handleDrop} removeItem={removeItem} />
      ))}
      <DropZone onDrop={handleDrop} />
    </div>
  );
};

export default DragAndDropContainer;
