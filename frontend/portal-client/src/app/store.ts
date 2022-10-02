import { configureStore } from '@reduxjs/toolkit';
import jobReducer from "../features/job/jobSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    jobs:jobReducer,
    authentication:authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


