import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import employeeReducer from "./reducers/employeeReucer";
import employeeLoginReducer from "./reducers/employeeLoginReducer";
import adminReducer from "./reducers/adminReducer";
import updateRoleReducer from "./reducers/updateRoleReducer";
import addInTeam from "./reducers/addInTeam";
import empWorkReducer from "./reducers/empWorkReducer";
import findEmpWorkReducer from "./reducers/findEmpWorkReducer";
import userRatingsReducer from "./reducers/userRatingsReducer";
const reducer = combineReducers({
  employee: employeeReducer,
  employeeLogin: employeeLoginReducer,
  adminDashboard: adminReducer,
  updateRole: updateRoleReducer,
  addInTeamManager: addInTeam,
  empWork: empWorkReducer,
  employeeWorkList: findEmpWorkReducer,
  userRatings: userRatingsReducer,
});
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
export default store;
