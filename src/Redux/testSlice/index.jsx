import React, { useEffect, useState } from "react";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// API manzilini oling
const api = import.meta.env.VITE_API;

// Redux slice yaratish
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataStart());

  // localStorage'dan 'access' nomli tokenni olish
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(`${api}test/bolim/`, {
      headers: {
        Authorization: `Bearer ${token}` // Tokenni so'rov sarlavhasiga qo'shish
      }
    });
    console.log(response.data);
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};

export default dataSlice.reducer;