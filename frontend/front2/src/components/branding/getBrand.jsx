/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BrandingForm from './brandingForm';
import BrandingList from './brandingList';

const GetBrandingController = ({ handleDeleteBrand, editingBrand, handleUpdateBrand, brands = [], handleEditBrand }) => {
    const [showForm, setShowForm] = useState(false);

    const toggleFormVisibility = () => {
        setShowForm(!showForm);
    };

    return (
        <div>
            <button className="btn btn-outline-primary mb-3" onClick={toggleFormVisibility}>
                {showForm ? 'Cancel' : 'Edit Branding'}
            </button>
            {showForm && (
                <BrandingForm
                    onSubmit={(formData) => {
                        handleUpdateBrand(formData);
                        setShowForm(false); // Hide the form after update
                    }}
                    initialData={editingBrand}
                />
            )}
            <BrandingList
                brands={brands}
                onEdit={(brand) => {
                    handleEditBrand(brand);
                    setShowForm(true); // Show the form when editing
                }}
                onDelete={handleDeleteBrand}
            />
        </div>
    );
};

export default GetBrandingController;
