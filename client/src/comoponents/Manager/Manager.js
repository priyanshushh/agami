import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  adminDashboard,
  updateUserRatings,
  addInTeam,
} from "../../actions/employeeAction";

import { Link } from "react-router-dom";
import "./Manager.css";
const Manager = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.adminDashboard);
  // const friends = useSelector((state) => state.addInTeamManager);
  useEffect(() => {
    dispatch(adminDashboard());
  }, [dispatch]);
  const [teamMembers, setTeamMembers] = useState(user.managerTeam);
  const rating = 0;
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
        <p> Ratings</p>
        <p>Role</p>
      </div>
      <div className="teamMem">
        <h4>Your Team Members</h4>
        {teamMembers.map((member, key) => (
          <div key={key} className="employee">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              key={key}
              to={`/employee/${member.memberId}`}
              target="_blank"
            >
              <p style={{ color: " rgb(37, 130, 222)" }}>
                {" "}
                {member.memberName}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="teamMem">
        <h4>Other Employees</h4>
        {users &&
          users.map((u, key) => (
            <div className="employee" key={key}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key={key}
                to={`/employee/${u._id}`}
                target="_blank"
              >
                <p style={{ color: " rgb(37, 130, 222)" }}>{u.name}</p>
              </Link>

              <p style={{ textTransform: "lowercase" }}> {u.email}</p>
              <p style={{ textTransform: "lowercase" }}> {u.ratings}</p>

              <p> {u.role}</p>
              {user.role === "manager" && (
                <div className="managerCont">
                  <p
                    className="managerFeatures"
                    onClick={() => {
                      setTeamMembers([
                        ...teamMembers,
                        { memberId: u._id, memberName: u.name },
                      ]);

                      dispatch(
                        addInTeam({
                          id: user._id,
                          userId: u._id,
                          rating: rating,
                          name: u.name,
                        })
                      );
                    }}
                  >
                    Add In Team
                  </p>
                  <select
                    onChange={(e) => {
                      window.location.reload();
                      dispatch(
                        updateUserRatings({
                          id: u._id,
                          newRating: e.target.value,
                        })
                      );
                    }}
                    className="managerFeatures"
                  >
                    <option>null</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Manager;
