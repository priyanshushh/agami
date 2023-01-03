import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  return (
    <div className="container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h2 className="logo">Agami-Timesheet</h2>
      </Link>
      {user ? (
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <button
            className="loginBtn"
            onClick={() => {
              localStorage.removeItem("userData");
            }}
          >
            LogOut
          </button>{" "}
        </Link>
      ) : (
        <Link to={"/register"}>
          <button className="loginBtn">Login/SignUp</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
