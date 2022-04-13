import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArtistByName, options } from "../api/api";
import { getArtistName } from "../../utils";

export const fetchArtist = createAsyncThunk(
  "artists/fetchArtist",
  async (artistName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${getArtistByName}${getArtistName(artistName)}`,
        options
      );

      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();

      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
