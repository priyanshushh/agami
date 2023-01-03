import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    adminRequest: (state, action) => {
      return { loading: true, product: [] };
    },
    adminSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    },
    adminFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const { adminRequest, adminFail, adminSuccess } = adminSlice.actions;
export default adminSlice.reducer;
