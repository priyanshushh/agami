import { createSlice } from "@reduxjs/toolkit";

export const employeeWorkListSlice = createSlice({
  name: "employeeWorksList",
  initialState: {},
  reducers: {
    employeeWorkListRequest: (state, action) => {
      return { loading: true, product: {} };
    },
    employeeWorkListSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        employeeWorksList: action.payload,
      };
    },
    employeeWorkListFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  employeeWorkListRequest,
  employeeWorkListFail,
  employeeWorkListSuccess,
} = employeeWorkListSlice.actions;
export default employeeWorkListSlice.reducer;
