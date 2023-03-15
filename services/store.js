import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { globalApi } from "./api";
export const store = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(globalApi.middleware)
  
});

setupListeners(store.dispatch)