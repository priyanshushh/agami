import { createSlice } from "@reduxjs/toolkit";

export const employeeWorkSlice = createSlice({
  name: "employeeWork",
  initialState: [],
  reducers: {
    employeeWorkRequest: (state, action) => {
      return { loading: true, product: [] };
    },
    employeeWorkSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    },
    employeeWorkFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const { employeeWorkRequest, employeeWorkFail, employeeWorkSuccess } =
  employeeWorkSlice.actions;
export default employeeWorkSlice.reducer;
