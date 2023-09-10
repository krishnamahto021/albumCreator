import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  albumsArray: [],
  showForm: false,
};

export const getInitialState = createAsyncThunk(
  "album/getInitialState",
  async (_, thunkAPI) => {
    try {
      console.log("iniial");
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      return res.data;
    } catch (err) {
      console.log("Error in fetching the details", err);
      toast.error("Error in Fetching!!");
    }
  }
);

export const addNewAlbum = createAsyncThunk(
  "album/addNewAlbum",
  async (title, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/albums",
        {
          title,
          isEditing: false,
        }
      );
      const newAlbum = res.data;
      toast.success("Added new Album!!");
      return newAlbum;
    } catch (err) {
      toast.error("Error in Adding Album!");
    }
  }
);

export const deleteAlbum = createAsyncThunk(
  "album/deleteAlbum",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
      toast.success("Album Deleted Successfully!!");
      return id;
    } catch (err) {
      toast.error("Error in Deleting Album!");
      console.log("Error in deleting album", err);
    }
  }
);

export const updateAlbum = createAsyncThunk(
  "updatedAlbum/updateAlbum",
  async (data, thunkAPI) => {
    try {
      const { title, id } = data;
      await axios.patch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        title,
      });
      return data;
    } catch (err) {
      toast.error("Error in Updating Album form!");
      console.log("Error in updating album", err);
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
    toggleUpdateForm: (state, action) => {
      const albumId = action.payload;
      const albumToEdit = state.albumsArray.find(
        (album) => album.id === albumId
      );
      if (albumToEdit) {
        albumToEdit.isEditing = !albumToEdit.isEditing;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInitialState.fulfilled, (state, action) => {
        state.albumsArray = [...action.payload];
      })
      .addCase(addNewAlbum.fulfilled, (state, action) => {
        state.albumsArray = [action.payload, ...state.albumsArray];
      })
      .addCase(deleteAlbum.fulfilled, (state, action) => {
        const id = action.payload;
        state.albumsArray = state.albumsArray.filter(
          (album) => album.id !== id
        );
      })
      .addCase(updateAlbum.fulfilled, (state, action) => {
        const { id, title } = action.payload;
        const updatedAlbum = state.albumsArray.map((album) => {
          if (album.id === id) {
            return {
              ...album,
              title,
            };
          }
          return album;
        });
        state.albumsArray = updatedAlbum;
        toast.success("Updated Album !!");
      });
  },
});

export const albumActions = albumSlice.actions;
export const albumReducer = albumSlice.reducer;
export const albumsArray = (state) => state.albumReducer.albumsArray;
export const showForm = (state) => state.albumReducer.showForm;
