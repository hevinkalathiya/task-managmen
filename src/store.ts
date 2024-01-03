import { configureStore } from '@reduxjs/toolkit';
import xyz from './Slice/tasksSlice';
const store = configureStore({
  reducer: {
    tasks: xyz
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
