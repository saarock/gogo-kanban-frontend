import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import projectReducer from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
  },
});
