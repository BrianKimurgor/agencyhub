/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {  } from 'react';
import CompanyList from './companyList';
import './company.css'

const GetCompanyController = ({handleDeleteCompany,
    editingCompany,
    handleUpdateCompany,
    companies,
    handleEditCompany}) => {
    return (
        <div className='companycontroller'>
            <h1>Company Management</h1>
            <CompanyList
                className='lists'
                companies={companies}
                onEdit={(company) => handleEditCompany(company)}
                onDelete={handleDeleteCompany}
            />
        </div>
    );
};

export default GetCompanyController;
