import { createSlice } from "@reduxjs/toolkit";

export const updateUserRoleSlice = createSlice({
  name: "updateUserRole",
  initialState: {},
  reducers: {
    updateUserRoleRequest: (state, action) => {
      return { loading: true, product: [] };
    },
    updateUserRoleSuccess: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    },
    updateUserRoleFail: (state, action) => {
      return { loading: false, error: action.payload };
    },
    clearErrors: (state, action) => {
      return { ...state, error: null };
    },
  },
});

export const {
  updateUserRoleRequest,
  updateUserRoleFail,
  updateUserRoleSuccess,
} = updateUserRoleSlice.actions;
export default updateUserRoleSlice.reducer;
