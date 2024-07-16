/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CompanyForm from '../components/companies/companyForm';
import GetCompanyController from '../components/companies/getCompany';
import { companes } from '../services/companyService';

const CompaniesPage = () => {
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
    companes.updateCompany({ ...formData, id: editingCompany.id }).then(updatedCompany => {
      setCompanies(companies.map(company => company.id === updatedCompany.id ? updatedCompany : company));
    });
  };

  const handleDeleteCompany = (companyId) => {
    companes.deleteCompany(companyId).then(() => {
      setCompanies(companies.filter(company => company.id !== companyId));
    });
  };

  const handleEditCompany = (company) => {
    setEditingCompany(company);
    console.log(company);
  };

  return (
    <>
      <CompanyForm onSubmit={handleCreateCompany} />
      <GetCompanyController
        handleEditCompany={handleEditCompany}
        handleDeleteCompany={handleDeleteCompany}
        handleUpdateCompany={handleUpdateCompany}
        companies={companies}
      />
    </>
  );
};

export default CompaniesPage;
