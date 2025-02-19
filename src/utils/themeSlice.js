import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "Light",
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = state.theme === "Light" ? "Dark" : "Light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
