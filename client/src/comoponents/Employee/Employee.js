import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmpWork, employeeWorkList } from "../../actions/employeeAction";
import { useParams } from "react-router-dom";
import "./Employee.css";
const Employee = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userData"));
  const [openWork, setOpenWork] = useState(false);
  const [userData, setUserData] = useState({
    date: "",
    projectName: "",
    startDate: "",
    endDate: "",
    workingHours: "",
  });
  const { id } = useParams();
  useEffect(() => {
    dispatch(employeeWorkList({ id: id }));
  }, [dispatch, id]);
  const work = useSelector((state) => state.employeeWorkList);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addEmpWork({
        date: userData.date,
        projectName: userData.projectName,
        startDate: userData.startDate,
        endDate: userData.endDate,
        workingHours: userData.workingHours,
        userId: user._id,
        userName: user.name,
      })
    );

    setOpenWork(false);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <div className="homeContAdmin">
      {/* {loading && (
        <div className="model">
          <h1>Loading...</h1>
        </div>
      )} */}
      <div className="userDetails">
        <p> {user.name} (You)</p>

        <p style={{ textTransform: "lowercase" }}> {user.email}</p>

        <p> {user.role}</p>
      </div>
      {user.role === "employee" && (
        <div className="employee">
          <p> Ratings : {user.ratings}</p>
          <button
            onClick={() => setOpenWork(!openWork)}
            className="loginBtnHome"
          >
            Add Work
          </button>
        </div>
      )}
      {openWork && (
        <form>
          <h3 className="logSign">Add Work</h3>
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                date: e.target.value,
              });
            }}
            placeholder="Enter Today's Date"
            value={userData.date}
            type="text"
          />
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                projectName: e.target.value,
              });
            }}
            placeholder="Enter Project Name"
            value={userData.projectName}
            type="text"
          />
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                startDate: e.target.value,
              });
            }}
            placeholder="Enter Project Start Date"
            type="text"
            value={userData.startDate}
          />
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                endDate: e.target.value,
              });
            }}
            value={userData.endDate}
            placeholder="Enter Project End Date"
            type="text"
          />
          <input
            onChange={(e) => {
              setUserData({
                ...userData,
                workingHours: e.target.value,
              });
            }}
            value={userData.workingHours}
            placeholder="Enter Your Working Hours"
            type="text"
          />
          <button onClick={handleSubmit} type="submit" className="loginBtnHome">
            Submit
          </button>
        </form>
      )}
      <div className="employee">
        <p>Project Name</p>
        <p>Today's Date</p>
        <p>Start Date</p>
        <p>End Date</p>
        <p>Working Hours</p>
      </div>
      {work.loading && (
        <div className="model">
          <h1>Loading...</h1>
        </div>
      )}
      {work.employeeWorksList && (
        <div>
          {work.employeeWorksList.map((w, key) => (
            <div className="employee" key={key}>
              <p>{w.projectName}</p>
              <p>{w.date}</p>
              <p>{w.startDate}</p>
              <p>{w.endDate}</p>
              <p>{w.workingHours}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Employee;
