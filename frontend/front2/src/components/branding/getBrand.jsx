/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { } from 'react';
import BrandingForm from './brandingForm';
import BrandingList from './brandingList';

const GetBrandingController = ({ handleDeleteBrand,
    editingBrand,
    handleUpdateBrand,
    brands,
    handleEditBrand
}) => {
    return (
        <div>
            <BrandingForm
                onSubmit={(formData) => handleUpdateBrand(formData)}
                initialData={editingBrand}
            />
            <BrandingList
            brands ={brands}
            onEdit={(brand) => handleEditBrand(brand)}
            onDelete={handleDeleteBrand}
            />
        </div>
    )
}

export default GetBrandingController
