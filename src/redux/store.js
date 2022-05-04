import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./movieReducer";

const store = configureStore({
  reducer: reducer,
});

export default store;
