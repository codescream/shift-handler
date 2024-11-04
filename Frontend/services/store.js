import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shiftyApi } from "./api";

export const store = configureStore({
  reducer: {
    [shiftyApi.reducerPath]: shiftyApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shiftyApi.middleware),
});

setupListeners(store.dispatch);