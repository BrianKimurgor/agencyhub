/* eslint-disable no-unused-vars */
// frontend/front2/src/components/branding/BrandingList.jsx
import React, { useEffect } from 'react';
import useBranding from '../../hooks/useBranding';
import BrandingForm from './brandingForm';

const BrandingList = () => {
    const { brandings, fetchAllBrandings, deleteExistingBranding } = useBranding();

    useEffect(() => {
        fetchAllBrandings();
    }, []);

    return (
        <div>
            <h2>Branding List</h2>
            <ul>
                {brandings && brandings.map((brand) => (
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
