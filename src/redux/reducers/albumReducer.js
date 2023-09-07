import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  albumsArray: [],
  showUpdateForm: false,
  showForm: false,
};

export const getInitialState = createAsyncThunk(
  "album/getInitialState",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      return res.data;
    } catch (err) {
      console.log("Error in fetching the details");
      toast.error("Error in Fetching!!");
    }
  }
);

export const addNewAlbum = createAsyncThunk(
  "album/addNewAlbum",
  async (title, thunkAPI) => {
    try {
      return axios.post("https://jsonplaceholder.typicode.com/albums", {
        title,
      });
    } catch (err) {
      toast.error("Error in Adding Album!");
    }
  }
);

export const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    toggleAlbum: (state, action) => {
      state.showForm = !state.showForm;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialState.fulfilled, (state, action) => {
        state.albumsArray = [...action.payload];
      })
      .addCase(addNewAlbum.fulfilled, (state, action) => {
        state.albumsArray.unshift(action.payload.data);
      });
  },
});

export const albumActions = albumSlice.actions;
export const albumReducer = albumSlice.reducer;
export const albumsArray = (state) => state.albumReducer.albumsArray;
export const showForm = (state) => state.albumReducer.showForm;
