// src/services/companyService.js
import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/companies';

const getCompanies = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
};

const createCompany = async (companyData) => {
    const response = await axios.post(apiUrl, companyData);
    return response.data;
};

const updateCompany = async (companyData) => {
    const response = await axios.put(apiUrl + '/' + companyData.id, companyData);
    return response.data;
};

const deleteCompany = async (companyId) => {
    await axios.delete(`${apiUrl}/${companyId}`);
};

export  const companes = {
    getCompanies,
    createCompany,
    updateCompany,
    deleteCompany,
};
