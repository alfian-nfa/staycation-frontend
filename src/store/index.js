import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import loggerMiddleware from "../middleware/logger"; // Example custom middleware

const preloadedState = {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware), // Custom middleware added here
  devTools: process.env.NODE_ENV !== "production",
});

export { store };
