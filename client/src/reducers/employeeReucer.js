import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {},
  reducers: {
    employeeRequest: (state, action) => {
      return { loading: true, product: [] };
    },
    employeeSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    },
    employeeFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const { employeeRequest, employeeFail, employeeSuccess, clearErrors } =
  employeeSlice.actions;
export default employeeSlice.reducer;
