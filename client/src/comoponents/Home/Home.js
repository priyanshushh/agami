import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Home = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  let adminRoute, managerRoute, employeeRoute;
  return (
    <div className="homeCont">
      {user ? (
        <>
          {(adminRoute = `/admin/${user._id}`)}
          {(managerRoute = `/manager/${user._id}`)}
          {(employeeRoute = `/employee/${user._id}`)}
          <div>{user.role === "admin" && <Navigate to={adminRoute} />}</div>
          <div>{user.role === "manager" && <Navigate to={managerRoute} />}</div>
          <div>
            {user.role === "employee" && <Navigate to={employeeRoute} />}
          </div>
        </>
      ) : (
        <div className="statements">
          <p>Welcome to the Timesheets</p>
          <p className="margin">
            Keep trake of your working days in the best possible way
          </p>

          <Link to="/register">
            <button className="loginBtnHome">Login / SignUp</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
