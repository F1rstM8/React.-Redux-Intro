import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import weatherReducer from './weatherSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
  },
});