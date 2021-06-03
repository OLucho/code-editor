import { createSlice } from "@reduxjs/toolkit";

export const initialState = false;

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    toggleDarkMode(state) {
      return !state;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export const darkModeReducers = darkModeSlice.reducer;
