// frontend/front2/src/services/brandingService.jsx
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/brandings';

export const createBranding = async (brandingData) => {
    const response = await axios.post(API_URL, brandingData);
    return response.data;
};

export const getBranding = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const updateBranding = async (id, brandingData) => {
    const response = await axios.put(`${API_URL}/${id}`, brandingData);
    return response.data;
};

export const deleteBranding = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
