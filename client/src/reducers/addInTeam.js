import { createSlice } from "@reduxjs/toolkit";

export const addInTeamSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    addInTeamRequest: (state, action) => {
      return { loading: true, product: [] };
    },
    addInTeamSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    },
    addInTeamFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const { addInTeamRequest, addInTeamFail, addInTeamSuccess } =
  addInTeamSlice.actions;
export default addInTeamSlice.reducer;
