import { combineReducers } from "@reduxjs/toolkit";
import artistReducer from "./artist/artistSlice";
import chartReducer from "./chart/chartSlice";

export const reducers = combineReducers({
  artist: artistReducer,
  chart: chartReducer,
});
