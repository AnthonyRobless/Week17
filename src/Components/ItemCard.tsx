import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Item } from '../types'; // ✅ import the shared item type

// ✅ define the props type
interface Props {
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

const ItemCard: React.FC<Props> = ({ item, onEdit, onDelete }) => {
  const history = useHistory();

  const handleEdit = () => {
    onEdit(item);
    history.push(`/edit/${item.id}`);
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
};

export default ItemCard;