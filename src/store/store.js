import { configureStore } from "@reduxjs/toolkit";
import findedArtists from "./reducers/findedArtists";

export const store = configureStore({
  reducer: {
    findedArtists,
  },
});
