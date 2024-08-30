import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = import.meta.env.VITE_API;

export const fetchData = createAsyncThunk("frontend/fetchData", async () => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(`${api}test/test/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("API chaqiruvida xato:", error);
    throw error;
  }
});

const frontendSlice = createSlice({
  name: "frontend",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Ma'lumotlar statega yuklanadi
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default frontendSlice.reducer;