// src/components/BrandingForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBranding } from '../features/branding/brandingSlice';

const BrandingForm = () => {
  const [formData, setFormData] = useState({
    agencyId: '',
    logoUrl: '',
    primaryColor: '',
    secondaryColor: '',
    welcomeText: '',
    footerText: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBranding(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="agencyId" value={formData.agencyId} onChange={handleChange} placeholder="Agency ID" required />
      <input type="text" name="logoUrl" value={formData.logoUrl} onChange={handleChange} placeholder="Logo URL" required />
      <input type="text" name="primaryColor" value={formData.primaryColor} onChange={handleChange} placeholder="Primary Color" required />
      <input type="text" name="secondaryColor" value={formData.secondaryColor} onChange={handleChange} placeholder="Secondary Color" required />
      <input type="text" name="welcomeText" value={formData.welcomeText} onChange={handleChange} placeholder="Welcome Text" required />
      <input type="text" name="footerText" value={formData.footerText} onChange={handleChange} placeholder="Footer Text" required />
      <button type="submit">Create Branding</button>
    </form>
  );
};

export default BrandingForm;
