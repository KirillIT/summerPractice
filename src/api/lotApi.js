import axios from 'axios';

const API_URL = 'http://localhost:8080/api/lots';

export const getAllLots = () => axios.get(API_URL);

export const createLot = (lot) => axios.post(API_URL, lot);

export const updateLot = (id, lot) => axios.put(`${API_URL}/${id}`, lot);

export const deleteLot = (id) => axios.delete(`${API_URL}/${id}`);