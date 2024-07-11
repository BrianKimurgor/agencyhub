/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

const ClientForm = ({ onSubmit, editingClient }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    companyId: null,
  });

  useEffect(() => {
    if (editingClient) {
      setFormData(editingClient);
    }
  }, [editingClient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      companyId: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="number" name="companyId" value={formData.companyId} onChange={handleChange} placeholder="Company ID" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ClientForm;
