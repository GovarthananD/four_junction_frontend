import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeeks = createAsyncThunk("getMovies/week", async () => {
    const res = await axios.get("https://four-junction-backend.onrender.com/getMovies/week");
    return res.data;
});

export const fetchSeries = createAsyncThunk("getMovies/series", async () => {
    const res = await axios.get("https://four-junction-backend.onrender.com/getMovies/series");
    return res.data;
});

export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (id) => {
    const res = await axios.get(`https://four-junction-backend.onrender.com/${id}`);
    return res.data;
});

export const fetchAllMovies = createAsyncThunk('getMovies/fetchAllMovies', async (id) => {
    const res = await axios.get(`https://four-junction-backend.onrender.com/getMovies`);
    return res.data;
});


const movieSlice = createSlice({
    name: "movies",
    initialState: {
        all: [],
        top:[],
      
        selected: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchWeeks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchWeeks.fulfilled, (state, action) => {
                state.loading = false;
                state.all = action.payload;
            })

            .addCase(fetchSeries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSeries.fulfilled, (state, action) => {
                state.loading = false;
                state.top = action.payload;
            })

            .addCase(fetchMovieById.fulfilled, (state, action) => {
                state.selected = action.payload;
            })

            .addCase(fetchAllMovies.pending, (state) => {
                state.loading = true;
            })

            .addCase(fetchAllMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.allMovies = action.payload;
            });
    }
});

export default movieSlice.reducer;