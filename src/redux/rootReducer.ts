import { combineReducers } from "@reduxjs/toolkit";
import { darkModeReducers } from "./darkMode/reducer";

const reducer = combineReducers({
  darkMode: darkModeReducers,
});

export default reducer;
