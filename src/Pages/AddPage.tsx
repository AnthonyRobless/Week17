import React from 'react';
import { useHistory } from 'react-router-dom';
import CreateForm from '../Components/CreateForm';
import { Item } from '../types';

interface Props {
  addItem: (item: Item) => void;
  clearEdit: () => void;
}

const AddPage: React.FC<Props> = ({ addItem, clearEdit }) => {
  const history = useHistory(); // ✅ Call the hook here

  return (
    <div className="container mt-4">
      <h2>Add New Item</h2>
      <CreateForm
        addItem={addItem}
        clearEdit={() => history.push('/')} // ✅ Use it here
      />
    </div>
  );
};

export default AddPage;