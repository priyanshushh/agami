import { createSlice } from "@reduxjs/toolkit";

export const deleteEmployeeSlice = createSlice({
  name: "employeeDelete",
  initialState: [],
  reducers: {
    deleteEmployeeRequest: (state, action) => {
      return { loading: true, product: [] };
    },
    deleteEmployeeSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    },
    deleteEmployeeFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  deleteEmployeeRequest,
  deleteEmployeeFail,
  deleteEmployeeSuccess,
} = deleteEmployeeSlice.actions;
export default deleteEmployeeSlice.reducer;
