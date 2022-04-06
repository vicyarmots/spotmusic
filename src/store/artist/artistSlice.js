import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArtist = createAsyncThunk(
  "artists/fetchArtist",
  async (artistName, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artistName}`
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

const todoSlice = createSlice({
  name: "artist",
  initialState: {
    artist: {},
    status: null,
    error: null,
  },
  extraReducers: {
    [fetchArtist.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchArtist.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.artist = action.payload;
    },
    [fetchArtist.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default todoSlice.reducer;
