// src/components/BrandingDetails.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBranding, deleteBranding } from '../features/branding/brandingSlice';

// eslint-disable-next-line react/prop-types
const BrandingDetails = ({ id }) => {
  const dispatch = useDispatch();
  const branding = useSelector((state) => state.branding.branding);
  const status = useSelector((state) => state.branding.status);

  useEffect(() => {
    dispatch(getBranding(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteBranding(id));
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load branding details.</p>;
  }

  return (
    branding && (
      <div>
        <h2>Branding Details</h2>
        <p>Agency ID: {branding.agencyId}</p>
        <p>Logo URL: {branding.logoUrl}</p>
        <p>Primary Color: {branding.primaryColor}</p>
        <p>Secondary Color: {branding.secondaryColor}</p>
        <p>Welcome Text: {branding.welcomeText}</p>
        <p>Footer Text: {branding.footerText}</p>
        <button onClick={handleDelete}>Delete Branding</button>
      </div>
    )
  );
};

export default BrandingDetails;
