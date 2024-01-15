import { configureStore } from '@reduxjs/toolkit';
import headerSlicer from '../features/Header/headerSlicer';

export const store = configureStore({
  reducer: {
    counter: headerSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch