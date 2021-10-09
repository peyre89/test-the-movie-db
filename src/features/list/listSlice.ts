import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SliceState = number[];

const initialState: SliceState = [];

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    movies: initialState,
  },
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.movies.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const filtered: SliceState = state.movies.filter(
        id => id !== action.payload
      );

      state.movies = filtered;
    },
  },
});

export const { add, remove } = listSlice.actions;

export default listSlice.reducer;
