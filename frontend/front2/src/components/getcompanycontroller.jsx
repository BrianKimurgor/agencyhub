// src/components/BrandingForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from "axios"

const CompanyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contactEmail: '',
        contactPhone: '',
        industry: '',
    });

    const [companies, setCompanies] = useState([])
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect( ()=>{
        axios.get("http://localhost:5000/api/companies")
        .then( res=> setCompanies(res.data))
        .catch(error => setError(error.message))
    },[])

    console.log(companies)

    const createCompany = (comanyData) =>{
        axios.post("http://localhost:5000/api/companies", comanyData).then(
            res=> console.log(res.data)
        )
    }

    const updateCompany = (companyData) => {
        axios.put("http://localhost:5000/api/companies", companyData)
        .then(res => console.log(res.data))
    }

    const deleteCompany = (companyData) => {
        axios.delete("http://localhost:5000/api/companies", companyData)
        .then(res => console.log(res.data))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createCompany(formData)
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <label htmlFor="name">Company Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            {/* Address Input */}
            <label htmlFor="address">Company Address:</label>
            <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
            />

            {/* Contact Email Input */}
            <label htmlFor="contactEmail">Contact Email:</label>
            <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
            />

            {/* Contact Phone Input */}
            <label htmlFor="contactPhone">Contact Phone:</label>
            <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
            />

            {/* Industry Input */}
            <label htmlFor="industry">Industry:</label>
            <input
                type="text"
                id="industry"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
            />

            {/* Submit Button */}
            <button type="submit">Create Company</button>
        </form>
    );
};

export default CompanyForm
