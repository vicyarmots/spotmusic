import { createSlice } from "@reduxjs/toolkit";
import { fetchArtist } from "./fetchArtist";

const artistSlice = createSlice({
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

export default artistSlice.reducer;
