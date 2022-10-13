import { configureStore } from '@reduxjs/toolkit';
import jobReducer from "../features/job/jobSlice";
import authReducer from "../features/auth/authSlice";
import companyReducer from '../features/company/companySlice';

export const store = configureStore({
  reducer: {
    jobs:jobReducer,
    authentication:authReducer,
    company:companyReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


