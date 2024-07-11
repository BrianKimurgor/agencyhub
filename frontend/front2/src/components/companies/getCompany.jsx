/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {  } from 'react';
import CompanyForm from './companyForm';
import CompanyList from './companyList';

const GetCompanyController = ({handleDeleteCompany,
    editingCompany,
    handleUpdateCompany,
    companies,
    handleEditCompany}) => {
    return (
        <div>
            <h1>Company Management</h1>
            <CompanyForm
                onSubmit={(formData) => handleUpdateCompany(formData) }
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
