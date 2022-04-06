import { configureStore } from "@reduxjs/toolkit";
import artistSlice from "./artist/artistSlice";

export const store = configureStore({
  reducer: { artistSlice },
});
