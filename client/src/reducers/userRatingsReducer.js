import { createSlice } from "@reduxjs/toolkit";

export const userRatingsSlice = createSlice({
  name: "userRatings",
  initialState: {},
  reducers: {
    userRatingsRequest: (state, action) => {
      return { loading: true, product: {} };
    },
    userRatingsSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        employeeWorksList: action.payload,
      };
    },
    userRatingsFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const { userRatingsRequest, userRatingsFail, userRatingsSuccess } =
  userRatingsSlice.actions;
export default userRatingsSlice.reducer;
