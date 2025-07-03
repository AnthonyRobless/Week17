// src/pages/HomePage.js
import React from 'react';
import ItemList from '../Components/ItemList';

function HomePage({ items, onEdit, onDelete }) {
  return (
    <div className="container mt-4">
      <h2>All Items</h2>
      <ItemList items={items} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default HomePage;