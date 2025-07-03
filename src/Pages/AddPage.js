// src/pages/AddPage.js
import React from 'react';
import CreateForm from '../Components/CreateForm';

function AddPage({ addItem, clearEdit }) {
  return (
    <div className="container mt-4">
      <h2>Add New Item</h2>
      <CreateForm addItem={addItem} clearEdit={clearEdit} />
    </div>
  );
}

export default AddPage;