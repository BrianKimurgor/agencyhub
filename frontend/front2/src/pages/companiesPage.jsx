/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import CompanyForm from '../components/companies/companyForm';
import GetCompanyController from '../components/companies/getCompany';
import { companes } from '../services/companyService';

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    companes.getCompanies().then(data => setCompanies(data));
  }, []);

  const handleCreateCompany = (formData) => {
    companes.createCompany(formData).then(newCompany => {
      setCompanies([...companies, newCompany]);
      setShowCreateForm(false); // Hide the form after creating
    });
  };

  const handleUpdateCompany = (formData) => {
    companes.updateCompany({ ...formData, id: editingCompany.id }).then(updatedCompany => {
      setCompanies(companies.map(company => company.id === updatedCompany.id ? updatedCompany : company));
      setShowUpdateForm(false); // Hide the form after updating
      setEditingCompany(null); // Clear editing state
    });
  };

  const handleDeleteCompany = (companyId) => {
    companes.deleteCompany(companyId).then(() => {
      setCompanies(companies.filter(company => company.id !== companyId));
    });
  };

  const handleEditCompany = (company) => {
    setEditingCompany(company);
    setShowUpdateForm(true); // Show the update form
  };

  return (
    <>
      <div className='companys'>
        <button
          className="btn btn-outline-primary mb-3"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          {showCreateForm ? 'Cancel' : 'Create Company'}
        </button>
        {showCreateForm && <CompanyForm onSubmit={handleCreateCompany} />}
        <div className='detaills'>
          <GetCompanyController
            handleEditCompany={handleEditCompany}
            handleDeleteCompany={handleDeleteCompany}
            companies={companies}
          />
          {showUpdateForm && editingCompany && (
            <CompanyForm
              onSubmit={handleUpdateCompany}
              initialData={editingCompany}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CompaniesPage;
