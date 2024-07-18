/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import useBranding from '../../hooks/useBranding';

const BrandingForm = ({ brandingId }) => {
    const { createNewBranding, updateExistingBranding, branding, fetchBranding } = useBranding();
    const [formData, setFormData] = useState({
        companyId: '',
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
                companyId: branding.companyId.toString(),
                logoUrl: branding.logoUrl,
                primaryColor: branding.primaryColor,
                secondaryColor: branding.secondaryColor,
                welcomeText: branding.welcomeText,
                footerText: branding.footerText,
            });
        }
    }, [branding]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'companyId' ? Number(value) : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedData = {
            ...formData,
            companyId: Number(formData.companyId),
        };
        if (brandingId) {
            await updateExistingBranding(brandingId, formattedData);
        } else {
            await createNewBranding(formattedData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="companyId" value={formData.companyId} onChange={handleChange} placeholder="Agency ID" required />
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
