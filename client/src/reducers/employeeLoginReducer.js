import { createSlice } from "@reduxjs/toolkit";

export const employeeLoginSlice = createSlice({
  name: "employeeLogin",
  initialState: {
    loading: true,
    userInfo: {},
  },
  reducers: {
    employeeLoginRequest: (state, action) => {
      return { loading: true, employee: {} };
    },
    employeeLoginSuccess: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    employeeLoginFail: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    clearErrorsLogin: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  employeeLoginRequest,
  employeeLoginFail,
  employeeLoginSuccess,
  clearErrorsLogin,
} = employeeLoginSlice.actions;
export default employeeLoginSlice.reducer;
