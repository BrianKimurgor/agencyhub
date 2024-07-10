/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import CompanyForm from './companyForm';
import CompanyList from './companyList';
import { companes } from '../../services/companyService';

const GetCompanyController = () => {
    const [companies, setCompanies] = useState([]);
    const [editingCompany, setEditingCompany] = useState({
        id: 0,
        name: '',
        address: '',
        contactEmail: '',
        contactPhone: '',
        industry: ''
    });

    useEffect(() => {
        companes.getCompanies().then(data => setCompanies(data));
    }, []);

    const handleCreateCompany = (formData) => {
        companes.createCompany(formData).then(newCompany => {
            setCompanies([...companies, newCompany]);
        });
    };

    const handleUpdateCompany = (formData) => {
        companes.updateCompany(editingCompany.id, formData).then(updatedCompany => {
            setCompanies(companies.map(company => company.id === updatedCompany.id ? updatedCompany : company));
            setEditingCompany(null);
        });
    };

    const handleDeleteCompany = (companyId) => {
        companes.deleteCompany(companyId).then(() => {
            setCompanies(companies.filter(company => company.id !== companyId));
        });
    };

    const handleEditCompany = (company) => {
        setEditingCompany(company);
        console.log(company)
    };

    return (
        <div>
            <h1>Company Management</h1>
            <CompanyForm
                onSubmit={editingCompany ? handleUpdateCompany : handleCreateCompany}
                initialData={editingCompany}
            />
            <CompanyList
                companies={companies}
                onEdit={(company) => handleEditCompany(company)}
                onDelete={handleDeleteCompany}
            />
        </div>
    );
};

export default GetCompanyController;
