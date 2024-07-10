/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/companies/CompanyList.jsx
import React from 'react';

const CompanyList = ({ companies, onEdit, onDelete }) => {
    return (
        <ul>
            {companies.map((company) => (
                <li key={company.id}>
                    {company.name} - {company.address} - {company.contactEmail} - {company.contactPhone} - {company.industry}
                    <button onClick={() => onEdit(company)}>Edit</button>
                    <button onClick={() => onDelete(company.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default CompanyList;
