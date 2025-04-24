import { configureStore } from '@reduxjs/toolkit';
import userReducer from './featurs/userSlice';
import cartReducer from './featurs/cartSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;