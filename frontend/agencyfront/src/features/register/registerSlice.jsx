import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
  name: 'register',
  initialState: {
    name: '',
    email: '',
    password: '',
    agreedToTerms: false,
  },
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    },
    toggleAgreedToTerms: (state) => {
      state.agreedToTerms = !state.agreedToTerms;
    },
  },
});

export const { updateName, updateEmail, updatePassword, toggleAgreedToTerms } = registerSlice.actions;
export default registerSlice.reducer;
