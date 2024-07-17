// frontend/front2/src/hooks/useBranding.jsx
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import { createBranding, getBranding, updateBranding, deleteBranding, getBrandings } from '../services/brandingService';

const useBranding = () => {
    const [branding, setBranding] = useState(null);
    const [brandings, setBrandings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchBranding = async (id) => {
        setLoading(true);
        try {
            const data = await getBranding(id);
            setBranding(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchAllBrandings = async () => {
        setLoading(true);
        try {
            const data = await getBrandings();
            setBrandings(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const createNewBranding = async (brandingData) => {
        setLoading(true);
        try {
            const data = await createBranding(brandingData);
            setBranding(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const updateExistingBranding = async (id, brandingData) => {
        setLoading(true);
        try {
            const data = await updateBranding(id, brandingData);
            setBranding(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteExistingBranding = async (id) => {
        setLoading(true);
        try {
            await deleteBranding(id);
            setBranding(null);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return {
        branding,
        brandings,
        loading,
        error,
        fetchBranding,
        fetchAllBrandings,
        createNewBranding,
        updateExistingBranding,
        deleteExistingBranding,
    };
};

export default useBranding;
