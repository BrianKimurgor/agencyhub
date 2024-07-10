/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CompanyList = ({ companies, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Company List</h2>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        {company.name} - {company.address}
                        <button onClick={() => onEdit(company)}>Edit</button>
                        <button onClick={() => onDelete(company.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;
