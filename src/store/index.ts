import { configureStore } from '@reduxjs/toolkit';

import listReducer from 'features/list/listSlice';

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
