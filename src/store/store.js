import { configureStore } from "@reduxjs/toolkit";
import search from "./reducers/search";

export const store = configureStore({
  reducer: {
    search,
  },
});
