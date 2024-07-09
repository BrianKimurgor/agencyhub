import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import registerReducer from '../features/register/registerSlice';
import brandingReducer from '../features/branding/brandingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    branding: brandingReducer,
  },
});
