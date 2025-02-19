import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../utils/counterSlice";
import themeReducer from "../utils/themeSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
  },
});

export default store;
