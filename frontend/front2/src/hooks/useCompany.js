import { useState, useEffect } from 'react';
import { companes } from '../services/companyService';

/**
 * Custom hook to manage company data.
 * @returns {Object} - An object containing companies, createCompany, updateCompany, and deleteCompany functions.
 */
const useCompany = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        companes.getCompanies().then((data) => setCompanies(data));
    }, []);

    /**
     * Creates a new company.
     * @param {Object} companyData - The data of the company to create.
     */
    const createCompany = (companyData) => {
        companes.createCompany(companyData).then((data) => {
            setCompanies((prevCompanies) => [...prevCompanies, data]);
        });
    };

    /**
     * Updates an existing company.
     * @param {Object} companyData - The data of the company to update.
     */
    const updateCompany = (companyData) => {
        companes.updateCompany(companyData).then((data) => {
            setCompanies((prevCompanies) =>
                prevCompanies.map((company) =>
                    company.id === data.id ? data : company
                )
            );
        });
    };

    /**
     * Deletes a company.
     * @param {number} companyId - The ID of the company to delete.
     */
    const deleteCompany = (companyId) => {
        companes.deleteCompany(companyId).then(() => {
            setCompanies((prevCompanies) =>
                prevCompanies.filter((company) => company.id !== companyId)
            );
        });
    };

    return {
        companies,
        createCompany,
        updateCompany,
        deleteCompany,
    };
};

export default useCompany;
