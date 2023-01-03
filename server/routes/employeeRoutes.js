const express = require("express");

const {
  employeeRegister,
  employeeLogin,
  getAllEmployees,
  updateUserRole,
  addInTeam,
  addEmployeeWork,
  findWork,
  updateUserRatings,
  removeEmployee,
} = require("../controllers/employeeControllers");
const router = express.Router();

router.route("/login").post(employeeLogin);
router.route("/register").post(employeeRegister);
router.route("/admin").get(getAllEmployees);
router.route("/updateUser").post(updateUserRole);
router.route("/addInTeam").post(addInTeam);
router.route("/addWork").post(addEmployeeWork);
router.route("/findEmpWork/:id").post(findWork);
router.route("/updateUserRatings").post(updateUserRatings);
router.route("/removeEmployee").post(removeEmployee);

module.exports = router;
