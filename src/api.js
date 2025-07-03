import axios from 'axios';

const BASE_URL = 'https://6866d78d89803950dbb40d55.mockapi.io/items/items';

export const getItems = () => axios.get(BASE_URL);
export const createItem = (data) => axios.post(BASE_URL, data);
export const updateItem = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteItem = (id) => axios.delete(`${BASE_URL}/${id}`);