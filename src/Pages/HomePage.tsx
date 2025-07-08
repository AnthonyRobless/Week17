// src/pages/HomePage.js
import React from 'react';
import ItemList from '../Components/ItemList';
import { Item } from '../types';

interface Props {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

function HomePage({ items, onEdit, onDelete }: Props) {
  return (
    <div className="container mt-4">
      <h2>All Items</h2>
      <ItemList items={items} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default HomePage;