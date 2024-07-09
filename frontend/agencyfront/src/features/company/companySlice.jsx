import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

//createcompany
/**
 * Async function to create a new company using the provided company data.
 * @param {Object} companyData - The data of the company to be created.
 * @returns {Promise} A promise that resolves with the created company data or rejects with an error message.
 */
export const createCompany = createAsyncThunk(
    'company/createCompany',
    async (companyData, { rejectWithValue }) => {
        try {
            const response = await api.post(`/api/companies`, companyData)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)


//get single company
/**
 * Async function to retrieve a single company by its ID.
 * @param {string} id - The ID of the company to retrieve.
 * @returns {Promise} A promise that resolves with the company data or rejects with an error message.
 */
export const getCompany = createAsyncThunk(
    'company/getcompany',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.get(`/api/companies/${id}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

/**
 * Async function to update a company by its ID.
 * @param {string} id - The ID of the company to update.
 * @returns {Promise} A promise that resolves with the updated company data or rejects with an error message.
 */
export const updateCompany = createAsyncThunk(
    'company/updateCompany',
    async (id, { rejectWithValue }) => {
        try {
            const response = await api.put(`/api/companies/${id}`)
            return response.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

/**
 * Async function to delete a company by its ID.
 * @param {string} id - The ID of the company to delete.
 * @returns {Promise} A promise that resolves with the deleted company ID or rejects with an error message.
 */
export const deleteCompany = createAsyncThunk(
    'company/deleteCompany',
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/api/companies/${id}`)
            return id
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

//companySlice
const companySlice = createSlice({
    name: 'company',
    initialState: {
        company: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Create company
        builder
            .addCase(createCompany.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(createCompany.fulfilled, (state, action) => {
                state.status = 'idle';
                state.company = action.payload;
            })
            .addCase(createCompany.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Get company
        builder
            .addCase(getCompany.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getCompany.fulfilled, (state, action) => {
                state.status = 'idle';
                state.company = action.payload;
            })
            .addCase(getCompany.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Update company (similar pattern as createCompany and getCompany)
        builder
            .addCase(updateCompany.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(updateCompany.fulfilled, (state, action) => {
                state.status = 'idle';
                state.company = action.payload;
            })
            .addCase(updateCompany.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });

        // Delete company (similar pattern)
        builder
            .addCase(deleteCompany.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(deleteCompany.fulfilled, (state) => {
                state.status = 'idle';
                state.company = null; // Or set to another value depending on your logic
            })
            .addCase(deleteCompany.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },

})

export default companySlice.reducer
