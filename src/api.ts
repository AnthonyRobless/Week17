import axios from 'axios';
import { Item } from './types'; // ✅ Import your shared type

const BASE_URL = 'https://6866d78d89803950dbb40d55.mockapi.io/items/items';

// ✅ Explicit return types and typed parameters
export const getItems = () => axios.get<Item[]>(BASE_URL);

export const createItem = (data: Item) => axios.post<Item>(BASE_URL, data);

export const updateItem = (id: string, data: Item) =>
  axios.put<Item>(`${BASE_URL}/${id}`, data);

export const deleteItem = (id: string) =>
  axios.delete(`${BASE_URL}/${id}`);