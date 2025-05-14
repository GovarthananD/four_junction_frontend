import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";







export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (id) => {
    const res = await axios.get(`http://localhost:5000/${id}`);
    return res.data;
  });


const topSlice = createSlice({
    name:"topmovies",
    initialState:{
        top:[],
        selected:null,
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
        

        .addCase(fetchMovieById.fulfilled, (state, action) => {
            state.selected = action.payload;
          });
    }
});

export default topSlice.reducer;