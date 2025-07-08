import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import EditPage from './Pages/EditPage';
import NotFound from './Pages/NotFound';
import { getItems, createItem, updateItem, deleteItem } from './api';
import { Item } from './types';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null);

  useEffect(() => {
    getItems().then(res => setItems(res.data));
  }, []);

  const addItem = (item: Item): void => {
    createItem(item).then(res => setItems([...items, res.data]));
  };

  const updateItemHandler = (item: Item): void => {
    updateItem(item.id, item).then(res => {
      const updatedList = items.map(i => i.id === res.data.id ? res.data : i);
      setItems(updatedList);
    });
  };

  const deleteItemHandler = (id: string): void => {
    deleteItem(id).then(() => {
      setItems(items.filter(item => item.id !== id));
    });
  };

  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <HomePage items={items} onEdit={setItemToEdit} onDelete={deleteItemHandler} />
        </Route>
        <Route path="/add">
          <AddPage addItem={addItem} clearEdit={() => setItemToEdit(null)} />
        </Route>
        <Route path="/edit/:id">
          <EditPage
            items={items}
            updateItem={updateItemHandler}
            clearEdit={() => setItemToEdit(null)}
          />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;