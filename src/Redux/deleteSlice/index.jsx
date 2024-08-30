import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API;

export const deleteItem = createAsyncThunk(
  "frontend/deleteItem",
  async (id, thunkAPI) => {
    try {
      // Tokenni local storage-dan olish
      const token = localStorage.getItem('token');

      // Axios so'roviga tokenni sarlavha sifatida qo'shish
      const response = await axios.delete(`${api}test/test/delete/${id}/`, {
        headers: {
          'Authorization': `Bearer ${token}` // Tokenni Authorization sarlavhasida yuborish
        }
      });

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default deleteSlice.reducer;