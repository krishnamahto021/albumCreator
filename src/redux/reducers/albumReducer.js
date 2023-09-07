import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getInitialState = createAsyncThunk(
  "album/getInitialState",
  async (_, thunkAPI) => {
    try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
        return res.data;
    }catch(err){
        console.log("Error in fetching the details");
        toast.error("Error in Fetching!!");
    }
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState: [],
  reducers: {
  },
  extraReducers:(builder)=>{
    builder.addCase(getInitialState.fulfilled,(state,action)=>{
        return action.payload;
    })
  }
});

export const albumActions = albumSlice.actions;
export const albumReducer = albumSlice.reducer;
export const albumSelectors = (state) => state.albumReducer;
