// src/hooks/useCompany.js
import { useState, useEffect } from 'react';
import { companes } from '../services/companyService';
const useCompany = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
       companes.getCompanies().then((data) => setCompanies(data));
    }, []);

    const createCompany = (companyData) => {
        companes.createCompany(companyData).then((data) => {
            setCompanies((prevCompanies) => [...prevCompanies, data]);
        });
    };

    const updateCompany = (companyData) => {
        companes.updateCompany(companyData).then((data) => {
            setCompanies((prevCompanies) =>
                prevCompanies.map((company) =>
                    company.id === data.id ? data : company
                )
            );
        });
    };

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
