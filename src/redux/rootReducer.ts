import { combineReducers } from "@reduxjs/toolkit";
import { darkModeReducers } from "./reducers/darkMode/reducer";
import { filesReducer } from "./reducers/files/reducer";

const reducer = combineReducers({
  darkMode: darkModeReducers,
  files: filesReducer,
});

export default reducer;
