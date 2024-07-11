/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// frontend/front2/src/components/branding/BrandingForm.jsx
import React, { useState } from 'react';
import useBranding from '../../hooks/useBranding';
import { useEffect } from 'react';

const BrandingForm = ({ brandingId }) => {
    const { createNewBranding, updateExistingBranding, branding, fetchBranding } = useBranding();
    const [formData, setFormData] = useState({
        agencyId: '',
        logoUrl: '',
        primaryColor: '',
        secondaryColor: '',
        welcomeText: '',
        footerText: '',
    });

    useEffect(() => {
        if (brandingId) {
            fetchBranding(brandingId);
        }
    }, [brandingId]);

    useEffect(() => {
        if (branding) {
            setFormData({
                agencyId: branding.agencyId,
                logoUrl: branding.logoUrl,
                primaryColor: branding.primaryColor,
                secondaryColor: branding.secondaryColor,
                welcomeText: branding.welcomeText,
                footerText: branding.footerText,
            });
        }
    }, [branding]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (brandingId) {
            await updateExistingBranding(brandingId, formData);
        } else {
            await createNewBranding(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="agencyId" value={formData.agencyId} onChange={handleChange} placeholder="Agency ID" required />
            <input type="text" name="logoUrl" value={formData.logoUrl} onChange={handleChange} placeholder="Logo URL" />
            <input type="text" name="primaryColor" value={formData.primaryColor} onChange={handleChange} placeholder="Primary Color" />
            <input type="text" name="secondaryColor" value={formData.secondaryColor} onChange={handleChange} placeholder="Secondary Color" />
            <input type="text" name="welcomeText" value={formData.welcomeText} onChange={handleChange} placeholder="Welcome Text" />
            <input type="text" name="footerText" value={formData.footerText} onChange={handleChange} placeholder="Footer Text" />
            <button type="submit">{brandingId ? 'Update' : 'Create'} Branding</button>
        </form>
    );
};

export default BrandingForm;
