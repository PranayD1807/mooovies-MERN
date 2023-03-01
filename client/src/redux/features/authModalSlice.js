import { createSlice } from "@reduxjs/toolkit";
export const authModalSlice = createSlice({
  name: "AuthModal",
  initialState: {
    authModalOpen: false,
  },
  reducers: {
    setAuthModalOpoen: (state, action) => {
      state.authModalOpen = action.payload;
    },
  },
});

export const { setAuthModalOpoen } = authModalSlice.actions;
export default authModalSlice.reducer;
