import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "ayush",
  email: "",
  password: "",
  phone: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setPhone,
} = registerSlice.actions;

export default registerSlice.reducer;
