import { useParams, useHistory } from 'react-router-dom';
import CreateForm from '../Components/CreateForm';
import { Item } from '../types';

type RouteParams = {
  id: string;
};

interface Props {
  items: Item[];
  updateItem: (item: Item) => void;
  clearEdit: () => void; // ✅ Add this line
}

const EditPage: React.FC<Props> = ({ items, updateItem }) => {
  const { id } = useParams<RouteParams>();
  const history = useHistory();

  const itemToEdit = items.find(item => item.id === id);

  const clearEdit = () => {
    history.push('/');
  };

  return (
    <div>
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
};

export default EditPage;