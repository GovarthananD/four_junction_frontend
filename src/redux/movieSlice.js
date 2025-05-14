import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchUsers = createAsyncThunk("getMovies/", async () => {
    const res = await axios.get("https://four-junction-backend.onrender.com/getMovies");
    return res.data;
  });

export const addUser = createAsyncThunk("addMovie/", async (movie) => {
    const res = await axios.post("https://four-junction-backend.onrender.com/addMovie", movie);
    return res.data;
  });

  export const updateUser = createAsyncThunk("updateUser/", async ({ id, data }) => {
    const res = await axios.put(`https://four-junction-backend.onrender.com/${id}`, data);
    return res.data;
  });

  export const deleteUser = createAsyncThunk("/deleteUser", async (id) => {
    await axios.delete(`https://four-junction-backend.onrender.com/${id}`);
    return id;
  });

  const filmSlice = createSlice({
    name: "films",
    initialState: {
        allMovies:[],
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "Something went wrong";
          })
    
          .addCase(addUser.fulfilled, (state, action) => {
            state.list.push(action.payload);
          })

          .addCase(fetchUsers.fulfilled, (state,action) => {
            state.loading = false;
            state.allMovies = action.payload;
          })
    
          .addCase(updateUser.fulfilled, (state, action) => {
            const index = state.list.findIndex((u) => u._id === action.payload._id);
            if (index !== -1) {
    state.list[index] = action.payload;
  }
          })
    
          .addCase(deleteUser.fulfilled, (state, action) => {
            state.list = state.list.filter((u) => u._id !== action.payload);
          });
      },
    });
    
    export default filmSlice.reducer;