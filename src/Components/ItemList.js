// src/components/ItemList.js
import React from 'react';
import ItemCard from './ItemCard';

function ItemList({ items, onEdit, onDelete }) {
  return (
    <div>
      {items.map(item => (
        <ItemCard key={item.id} item={item} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ItemList;