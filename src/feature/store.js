import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from "./scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreSlice,
  },
});
