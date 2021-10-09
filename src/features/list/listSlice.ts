import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'types';

export type SliceState = Movie[];

const initialState: SliceState = [];

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    movies: initialState,
  },
  reducers: {
    add: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const filtered: SliceState = state.movies.filter(
        (movie: Movie) => movie.id !== action.payload
      );

      state.movies = filtered;
    },
  },
});

export const { add, remove } = listSlice.actions;

export default listSlice.reducer;
