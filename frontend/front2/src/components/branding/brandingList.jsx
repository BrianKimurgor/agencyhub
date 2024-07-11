/* eslint-disable no-unused-vars */
// frontend/front2/src/components/branding/BrandingList.jsx
import React, { useEffect } from 'react';
import useBranding from '../../hooks/useBranding';
import BrandingForm from './brandingForm';

const BrandingList = () => {
    const { branding, fetchBranding, deleteExistingBranding } = useBranding();

    useEffect(() => {
        fetchBranding();
    }, []);

    return (
        <div>
            <h2>Branding List</h2>
            <ul>
                {branding && branding.map((brand) => (
                    <li key={brand.id}>
                        {brand.logoUrl} - {brand.primaryColor} - {brand.secondaryColor}
                        <button onClick={() => deleteExistingBranding(brand.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <BrandingForm />
        </div>
    );
};

export default BrandingList;
