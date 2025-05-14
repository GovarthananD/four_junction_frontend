// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./dataslice";
import filmReducer from "./movieSlice";


const store = configureStore({
  reducer: {
    movies: movieReducer,
    films: filmReducer,
  }
});

export default store;
