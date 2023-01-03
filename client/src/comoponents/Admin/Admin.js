import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDashboard,
  updateUserRole,
  deleteEmployee,
} from "../../actions/employeeAction";
import { Link } from "react-router-dom";

import "./Admin.css";
const Admin = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.adminDashboard);
  useEffect(() => {
    dispatch(adminDashboard());
  }, [dispatch]);

  return (
    <div className="homeContAdmin">
      {loading && (
        <div className="model">
          <h1>Loading...</h1>
        </div>
      )}
      <div className="userDetails">
        <p> {user.name} (You)</p>

        <p style={{ textTransform: "lowercase" }}> {user.email}</p>

        <p> {user.role}</p>
      </div>

      <div className="employee">
        <p> Name</p>
        <p> Email</p>
        <p>Role</p>
        <p>Update Role</p>
      </div>

      {users &&
        users.map((u, key) => (
          <div key={key} className="employee">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={key}
              to={`/employee/${u._id}`}
              target="_blank"
            >
              <p style={{ color: " rgb(37, 130, 222)" }}> {u.name}</p>
            </Link>
            <p style={{ textTransform: "lowercase" }}> {u.email}</p>
            <p> {u.role}</p>
            {user.role === "admin" && (
              <select
                onChange={(e) => {
                  window.location.reload();
                  dispatch(
                    updateUserRole({ id: u._id, newRole: e.target.value })
                  );
                }}
              >
                <option value="employee">None</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
                <option value="manager">Manager</option>
              </select>
            )}
            <p
              onClick={() => {
                dispatch(deleteEmployee({ id: u._id }));
                // console.log(e.target.value);
              }}
            >
              <svg
                className="deleteIcon"
                width="22"
                height="22"
                viewBox="0 0 628 628"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M548.95 156.841H418.247V113.186C417.634 96.4513 410.411 80.6426 398.16 69.2253C385.91 57.8081 369.632 51.7139 352.896 52.2787H274.475C257.738 51.7139 241.461 57.8081 229.211 69.2253C216.96 80.6426 209.737 96.4513 209.124 113.186V156.841H78.4212C71.4883 156.841 64.8394 159.595 59.9371 164.497C55.0348 169.399 52.2808 176.048 52.2808 182.981C52.2808 189.914 55.0348 196.563 59.9371 201.465C64.8394 206.367 71.4883 209.121 78.4212 209.121H104.562V496.667C104.562 517.465 112.824 537.412 127.531 552.119C142.238 566.826 162.184 575.088 182.983 575.088H444.388C465.186 575.088 485.133 566.826 499.84 552.119C514.547 537.412 522.809 517.465 522.809 496.667V209.121H548.95C555.883 209.121 562.531 206.367 567.434 201.465C572.336 196.563 575.09 189.914 575.09 182.981C575.09 176.048 572.336 169.399 567.434 164.497C562.531 159.595 555.883 156.841 548.95 156.841ZM261.405 113.186C261.405 109.003 266.894 104.56 274.475 104.56H352.896C360.477 104.56 365.966 109.003 365.966 113.186V156.841H261.405V113.186Z"
                  fill="#2582DE"
                />
              </svg>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Admin;
