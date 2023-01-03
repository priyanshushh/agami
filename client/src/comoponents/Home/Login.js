import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee, loginEmployee } from "../../actions/employeeAction";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState("Login");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userDataLogin, setUserDataLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createEmployee({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      })
    );
    navigator("/register");
    window.location.reload();
  };
  // const data = useSelector((state) => state.employeeLogin);
  // data && console.log(data);
  const handleSubmitLogin = (e) => {
    dispatch(loginEmployee(userDataLogin));
    navigator("/");

    alert("If the page isn't opend than reload please it...");
    // window.location.reload();
  };
  return (
    <div className="homeCont">
      {loginState === "Login" && (
        <form>
          <h3 className="logSign">Login</h3>

          <input
            onChange={(e) => {
              setUserDataLogin({
                ...userDataLogin,
                email: e.target.value,
              });
            }}
            placeholder="Enter your gmail"
            type="email"
          />
          <input
            onChange={(e) => {
              setUserDataLogin({
                ...userDataLogin,
                password: e.target.value,
              });
            }}
            placeholder="Enter your password"
            type="password"
          />
          <button
            onClick={handleSubmitLogin}
            type="submit"
            className="loginBtnHome"
          >
            Login
          </button>
        </form>
      )}
      {loginState === "SignUp" && (
        <form>
          <h3 className="logSign">SignUp</h3>
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                name: e.target.value,
              });
            }}
            placeholder="Enter your name"
            type="text"
          />
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                email: e.target.value,
              });
            }}
            placeholder="Enter your gmail"
            type="email"
          />
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                password: e.target.value,
              });
            }}
            placeholder="Enter your password"
            type="password"
          />
          {/* <select>
            <option className="option">Employee</option>
            <option className="option">Manager</option>
          </select> */}
          <button onClick={handleSubmit} type="submit" className="loginBtnHome">
            SignUp
          </button>
        </form>
      )}
      <button
        className="loginBtnToggle"
        onClick={() =>
          setLoginState(loginState === "Login" ? "SignUp" : "Login")
        }
      >
        {loginState === "Login" ? "Create a new account. SignUp" : "Login"}
      </button>
    </div>
  );
};

export default Login;
