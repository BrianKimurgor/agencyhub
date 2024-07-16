import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/resources';

const getResources = async () => {
    const response = await axios.get(apiUrl)
    return response.data
}

const createResourse = async (resourceData) => {
    const response = await axios.post(apiUrl ,resourceData)
    return response.data
}

const updateCompany = async (resourceData) => {
    const response = await axios.put(apiUrl + '/' + resourceData.id, resourceData)
    return response.data;
}

const deleteComany = async (resourceID) => {
    await axios.delete(`${apiUrl}/${resourceID}`);
}

export const resources = {
    getResources,
    createResourse,
    updateCompany,
    deleteComany,
}
