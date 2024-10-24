// src/services/apiAgent.ts
import axios from 'axios';

const API_URL = 'http://localhost'; // Base URL de tu API

const apiAgent = {
  get: async (url: string) => {
    const response = await axios.get(`${API_URL}${url}`);
    return response.data;
  },

  post: async (url: string, body: any) => {
    const response = await axios.post(`${API_URL}${url}`, body);
    return response.data;
  },

  // Puedes agregar otros métodos como PUT, DELETE si los necesitas
};

export default apiAgent;
