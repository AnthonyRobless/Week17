import React, { useState, useEffect } from 'react';

function CreateForm({ addItem, itemToEdit, updateItem, clearEdit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Populate form when editing
  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setDescription(itemToEdit.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemToEdit) {
      updateItem({ ...itemToEdit, name, description });
    } else {
      addItem({ name, description });
    }

    setName('');
    setDescription('');
    clearEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{itemToEdit ? 'Edit Item' : 'Add New Item'}</h2>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Description:
        <input value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <br />
      <button type="submit">{itemToEdit ? 'Update Item' : 'Add Item'}</button>
    </form>
  );
}

export default CreateForm;

