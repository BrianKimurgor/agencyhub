// src/features/branding/brandingSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Async thunks for CRUD operations
export const createBranding = createAsyncThunk(
  'branding/createBranding',
  async (brandingData, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/brandings', brandingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getBranding = createAsyncThunk(
  'branding/getBranding',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/brandings/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateBranding = createAsyncThunk(
  'branding/updateBranding',
  async ({ id, brandingData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/api/brandings/${id}`, brandingData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteBranding = createAsyncThunk(
  'branding/deleteBranding',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/api/brandings/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const brandingSlice = createSlice({
  name: 'branding',
  initialState: {
    branding: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBranding.fulfilled, (state, action) => {
        state.branding = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getBranding.fulfilled, (state, action) => {
        state.branding = action.payload;
        state.status = 'succeeded';
      })
      .addCase(updateBranding.fulfilled, (state, action) => {
        state.branding = action.payload;
        state.status = 'succeeded';
      })
      .addCase(deleteBranding.fulfilled, (state) => {
        state.branding = null;
        state.status = 'succeeded';
      })
      .addMatcher(
        (action) => action.type.startsWith('branding') && action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        (action) => action.type.startsWith('branding') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        }
      );
  },
});

export default brandingSlice.reducer;
