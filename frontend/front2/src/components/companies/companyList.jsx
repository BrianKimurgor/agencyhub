/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/companies/CompanyList.jsx
import React, { useState } from 'react';
import './company.css'

const CompanyList = ({ companies, onEdit, onDelete }) => {
    const [selectedCompany, setSelectedCompany] = useState(null);

    const handleCompanyClick = (company) => {
        setSelectedCompany(company);
    };

    const handleCloseDetails = () => {
        setSelectedCompany(null);
    };

    return (
        <ul className='management'>
            {companies.map((company) => (
                <li key={company.id}>
                    <span onClick={() => handleCompanyClick(company)} style={{ cursor: 'pointer', color: 'white', size: 'larger' }}>
                        {company.name}
                    </span>
                    {selectedCompany && selectedCompany.id === company.id && (
                        <div className='links'>
                            <p>{company.address}</p>
                            <p>{company.contactEmail}</p>
                            <p>{company.contactPhone}</p>
                            <p>{company.industry}</p>
                            <div className='buttons'>
                                <button onClick={() => onEdit(company)}>Edit</button>
                                <button onClick={() => onDelete(company.id)}>Delete</button>
                                <button onClick={handleCloseDetails}>Close</button>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default CompanyList;
