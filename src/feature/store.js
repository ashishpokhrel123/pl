import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import scoreSlice from "./scoreSlice";

export const store = configureStore({
  reducer: {
    score: scoreSlice,
    modal: modalSlice,
  },
});
