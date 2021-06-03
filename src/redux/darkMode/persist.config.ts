import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import reducer from "../rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["darkMode"],
};

export const persistedReducer = persistReducer(persistConfig, reducer);
