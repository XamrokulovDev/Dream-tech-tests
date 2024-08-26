import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api = import.meta.env.VITE_API;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const deleteTest = createAsyncThunk('delete/deleteTest', async (testId) => {
  try {
    const url = `${api}test/test/delete/${testId}/`;
    console.log('Request URL:', url);  // URL manzilini tekshirish
    const response = await axios.delete(url);
    return testId;
  } catch (error) {
    console.error('Error deleting test:', error.response ? error.response.data : error.message);  // Xatolikni batafsil ko'rsatish
    throw error;
  }
});

const deleteSlice = createSlice({
  name: 'delete',
  initialState: {
    deleting: false,
    deleteError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteTest.pending, (state) => {
        state.deleting = true;
        state.deleteError = null;
      })
      .addCase(deleteTest.fulfilled, (state, action) => {
        state.deleting = false;
      })
      .addCase(deleteTest.rejected, (state, action) => {
        state.deleting = false;
        state.deleteError = action.error.message;
      });
  },
});

export default deleteSlice.reducer;