import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChart = createAsyncThunk(
  "artists/fetchArtist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart`
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
