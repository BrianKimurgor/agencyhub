import axios from 'axios';

const API_URL = 'http://localhost:5000/api/clients';

export const clients = {
  getClients: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  createClient: async (client) => {
    const response = await axios.post(API_URL, client);
    return response.data;
  },
  updateClient: async (client) => {
    const response = await axios.put(`${API_URL}/${client.id}`, client);
    return response.data;
  },
  deleteClient: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};

export default clients
