import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      if (!state.find(item => item._id === action.payload._id)) {
        state.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    removeFromFavorites: (state, action) => {
      const index = state.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(state));
      }
    },
    clearFavorites: (state) => {
      state.length = 0;
      localStorage.removeItem("favorites");
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer; 