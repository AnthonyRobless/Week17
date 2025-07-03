import React from 'react';
import { useParams } from 'react-router-dom';
import CreateForm from '../Components/CreateForm';

function EditPage({ items, updateItem, clearEdit }) {
  const { id } = useParams();
  const itemToEdit = items.find(item => item.id === id); // or === parseInt(id) if IDs are numbers

  return (
    <div className="container mt-4">
      <h2>Edit Item</h2>
      {itemToEdit ? (
        <CreateForm
          itemToEdit={itemToEdit}
          updateItem={updateItem}
          clearEdit={clearEdit}
        />
      ) : (
        <p>Item not found.</p>
      )}
    </div>
  );
}

export default EditPage;