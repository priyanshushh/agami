import axios from "axios";
import {
  employeeRequest,
  employeeFail,
  employeeSuccess,
  clearErrors,
} from "../reducers/employeeReucer";
import {
  employeeLoginRequest,
  employeeLoginFail,
  employeeLoginSuccess,
  clearErrorsLogin,
} from "../reducers/employeeLoginReducer";
import {
  adminRequest,
  adminFail,
  adminSuccess,
} from "../reducers/adminReducer";
import {
  updateUserRoleRequest,
  updateUserRoleFail,
  updateUserRoleSuccess,
} from "../reducers/updateRoleReducer";

import {
  addInTeamRequest,
  addInTeamFail,
  addInTeamSuccess,
} from "../reducers/addInTeam";

import {
  employeeWorkRequest,
  employeeWorkFail,
  employeeWorkSuccess,
} from "../reducers/empWorkReducer";
import {
  employeeWorkListRequest,
  employeeWorkListFail,
  employeeWorkListSuccess,
} from "../reducers/findEmpWorkReducer";
import {
  userRatingsRequest,
  userRatingsFail,
  userRatingsSuccess,
} from "../reducers/userRatingsReducer";
// import {deleteEmployeeRequest, deleteEmployeeFail, deleteEmployeeSuccess} from "../reducers/deleteEmployee";
export const createEmployee =
  ({ name, email, password }) =>
  async (dispatch) => {
    dispatch(employeeRequest());
    try {
      const res = await axios.post(`${process.env.baseLink}/register`, {
        name,
        email,
        password,
      });
      // console.log(res);
      dispatch(employeeSuccess(res.data.user));
      localStorage.setItem("userData", JSON.stringify(res.data.user));
    } catch (error) {
      dispatch(employeeFail(error));
      dispatch(clearErrors());
    }
  };

export const loginEmployee =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(employeeLoginRequest());
    try {
      const res = await axios.post(`https://agami-production.up.railway.app/api/v1/login`, {
        email,
        password,
      });
      // console.log(res.data.employee);
      dispatch(employeeLoginSuccess(res.data.employee[0]));

      localStorage.setItem("userData", JSON.stringify(res.data.employee[0]));
    } catch (error) {
      dispatch(employeeLoginFail(error));
      dispatch(clearErrorsLogin());
    }
  };

export const adminDashboard = () => async (dispatch) => {
  dispatch(adminRequest());
  try {
    const res = await axios.get(`${process.env.baseLink}/admin`);
    dispatch(adminSuccess(res.data.users));
  } catch (err) {
    dispatch(adminFail());
  }
};

export const deleteEmployee =
  ({ id }) =>
  async (dispatch) => {
    dispatch(adminRequest());
    // console.log(id);
    try {
      const res = await axios.post(`${process.env.baseLink}/removeEmployee`, {
        id,
      });
      // console.log(res);
      dispatch(adminSuccess(res.data.users));
    } catch (err) {
      dispatch(adminFail());
    }
  };

export const updateUserRole =
  ({ id, newRole }) =>
  async (dispatch) => {
    dispatch(updateUserRoleRequest());
    try {
      const res = await axios.post(`${process.env.baseLink}/updateUser`, {
        id,
        newRole,
      });
      // console.log(res);

      dispatch(updateUserRoleSuccess(res.data.user));
    } catch (error) {
      dispatch(updateUserRoleFail());
    }
  };

export const addInTeam =
  ({ id, userId, rating, name }) =>
  async (dispatch) => {
    dispatch(addInTeamRequest());
    // console.log(id, userId, rating, name);

    try {
      const res = await axios.post(`${process.env.baseLink}/addInTeam`, {
        id,
        userId,
        rating,
        name,
      });
      // console.log(res.data.finalManager);
      localStorage.setItem("userData", JSON.stringify(res.data.finalManager));
      dispatch(addInTeamSuccess(res.data.finalManager));
    } catch (error) {
      dispatch(addInTeamFail());
      console.log(error);
    }
  };

export const addEmpWork =
  ({ date, projectName, startDate, endDate, workingHours, userId, userName }) =>
  async (dispatch) => {
    // console.log(date, projectName, startDate, endDate, workingHours, userId);
    dispatch(employeeWorkRequest());
    try {
      const res = await axios.post(`${process.env.baseLink}/addWork`, {
        date,
        projectName,
        startDate,
        endDate,
        workingHours,
        userId,
        userName,
      });
      // console.log(res);
      dispatch(employeeWorkSuccess(res.data.work));
    } catch (error) {
      dispatch(employeeWorkFail());
    }
  };

export const employeeWorkList =
  ({ id }) =>
  async (dispatch) => {
    dispatch(employeeWorkListRequest());
    // console.log(id);
    try {
      const res = await axios.post(
        `${process.env.baseLink}/findEmpWork/${id}`,
        {
          id,
        }
      );
      dispatch(employeeWorkListSuccess(res.data.work));
      // console.log(res);
    } catch (error) {
      dispatch(employeeWorkListFail());
    }
  };

export const updateUserRatings =
  ({ id, newRating }) =>
  async (dispatch) => {
    console.log(id, newRating);
    dispatch(userRatingsRequest());
    try {
      const res = await axios.post(
        `${process.env.baseLink}/updateUserRatings`,
        { id, newRating }
      );
      console.log(res);
      dispatch(userRatingsSuccess(res.data.user));
    } catch (error) {
      dispatch(userRatingsFail());
    }
  };
