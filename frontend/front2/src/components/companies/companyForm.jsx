/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/companies/CompanyForm.jsx
import React, { useState, useEffect } from 'react';

const CompanyForm = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contactEmail: '',
        contactPhone: '',
        industry: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };
    return (
        <form onSubmit={handleSubmit} className='forms'>
            <input
                type="text"
                id="name"
                name="name"
                placeholder='company name'
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                id="address"
                name="address"
                placeholder='address'
                value={formData.address}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                placeholder='contact emai'
                value={formData.contactEmail}
                onChange={handleChange}
                required
            />
            <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                placeholder='contact phone'
                value={formData.contactPhone}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                id="industry"
                name="industry"
                placeholder='industry'
                value={formData.industry}
                onChange={handleChange}
            />

            <button type="submit">{initialData ? 'Update' : 'Create'} Company</button>
        </form>
    );
};

export default CompanyForm;
