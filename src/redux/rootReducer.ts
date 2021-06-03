import { combineReducers } from "@reduxjs/toolkit";
import { darkModeReducers } from "./darkMode/reducer";
import { filesReducer } from "./files/reducer";

const reducer = combineReducers({
  darkMode: darkModeReducers,
  files: filesReducer,
});

export default reducer;
