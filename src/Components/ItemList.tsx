import React from 'react';
import ItemCard from './ItemCard';
import { Item } from '../types'; // Import shared type

// Define prop types
interface Props {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

const ItemList: React.FC<Props> = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ItemList;