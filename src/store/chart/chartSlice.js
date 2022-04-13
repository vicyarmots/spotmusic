import { createSlice } from "@reduxjs/toolkit";
import { fetchChart } from "./fetchChart";

const chartSlice = createSlice({
  name: "chart",
  initialState: {
    chart: {},
  },
  extraReducers: {
    [fetchChart.pending]: (state) => {
      state.status = "loading";
    },
    [fetchChart.fulfilled]: (state, action) => {
      state.chart = action.payload;
    },
    [fetchChart.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default chartSlice.reducer;
