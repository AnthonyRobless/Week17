import React, { useState, useEffect } from 'react';
import { Item } from '../types';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  itemToEdit?: Item;
  updateItem?: (item: Item) => void;
  addItem?: (item: Item) => void;
  clearEdit: () => void;
}

const CreateForm: React.FC<Props> = ({ itemToEdit, updateItem, addItem, clearEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setName(itemToEdit.name);
      setDescription(itemToEdit.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [itemToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const item: Item = {
      id: itemToEdit ? itemToEdit.id : crypto.randomUUID(),
      name,
      description,
    };

    if (itemToEdit && updateItem) {
      updateItem(item);
    } else if (addItem) {
      addItem(item);
    }

    clearEdit();
  };

  return (
    <Modal show={true} onHide={clearEdit}>
      <Modal.Header closeButton>
        <Modal.Title>{itemToEdit ? 'Edit Item' : 'Add New Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={clearEdit} className="me-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {itemToEdit ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateForm;