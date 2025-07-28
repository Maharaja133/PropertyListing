// src/api/index.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getProperties = () => API.get('/properties');
export const addProperty = (propertyData) => API.post('/properties', propertyData);
