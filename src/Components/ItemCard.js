import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'; // ✅ add this

function ItemCard({ item, onEdit, onDelete }) {
  const history = useHistory(); // ✅ get access to navigation

  const handleEdit = () => {
    onEdit(item);                 // ✅ set item to edit
    history.push(`/edit/${item.id}`); // ✅ navigate to edit page
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="warning" onClick={handleEdit}>Edit</Button>{' '}
        <Button variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;