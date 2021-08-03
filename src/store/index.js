// import { createStore } from 'redux';

// export const store = createStore(
//   (state = { humans: [], tasks: [] }, action) => state
// );
import { configureStore } from '@reduxjs/toolkit';
import { humanSlice } from './humanSlice';
import { taskSlice } from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    humans: humanSlice.reducer
  }
});
