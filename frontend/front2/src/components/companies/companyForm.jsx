/* eslint-disable no-unused-vars */
// src/components/companies/CompanyForm.jsx
import React, { useState } from 'react';
import useCompany from '../../hooks/useCompany';

const CompanyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contactEmail: '',
        contactPhone: '',
        industry: '',
    });

    const { companies, createCompany } = useCompany();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createCompany(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Company Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="address">Company Address:</label>
            <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
            />

            <label htmlFor="contactEmail">Contact Email:</label>
            <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
            />

            <label htmlFor="contactPhone">Contact Phone:</label>
            <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
            />

            <label htmlFor="industry">Industry:</label>
            <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
            />

            <button type="submit">Create Company</button>
        </form>
    );
};

export default CompanyForm;
