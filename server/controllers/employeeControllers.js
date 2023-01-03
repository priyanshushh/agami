const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Employee = require("../models/employeeModel");
const Work = require("../models/empWorkModel");
exports.employeeRegister = catchAsyncErrors(async (req, res) => {
  // res.send("working");
  const { name, email, password } = req.body;

  const user = await Employee.create({
    name,
    email,
    password,
  });
  res.status(201).json({
    success: true,
    user,
  });
});

exports.employeeLogin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(res.send("Please enter email & password"));
  }
  const employee = await Employee.find({ email: email });
  if (!employee) {
    return next(res.send("enter correct email or password"));
  }
  res.status(200).json({
    success: true,
    employee,
  });
});

exports.getAllEmployees = catchAsyncErrors(async (req, res, next) => {
  const users = await Employee.find();
  res.status(200).json({
    success: true,
    users,
  });
});

exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const { id, newRole } = req.body;
  const user = await Employee.findByIdAndUpdate(id, { role: newRole });

  if (!user) {
    return next(res.send("Some error occured"));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

exports.addInTeam = catchAsyncErrors(async (req, res, next) => {
  const { id, userId, rating, name } = req.body;
  // const team = { userId, name };
  const user = await Employee.findByIdAndUpdate(userId, {
    managerId: id,
    ratings: rating,
  });
  const manager = await Employee.findByIdAndUpdate(id, {
    $push: { managerTeam: { memberId: userId, memberName: name } },
  });
  const finalManager = await Employee.findById(id);
  if (!user || !manager || !finalManager) {
    return next(res.send("Some Error Occured"));
  }
  res.status(200).json({
    success: true,
    user,
    finalManager,
  });
});
exports.addEmployeeWork = catchAsyncErrors(async (req, res) => {
  // res.send("working");
  const {
    date,
    projectName,
    startDate,
    endDate,
    userId,
    workingHours,
    userName,
  } = req.body;

  const work = await Work.create({
    date,
    projectName,
    startDate,
    endDate,
    workingHours,
    userId,
    userName,
  });
  res.status(201).json({
    success: true,
    work,
  });
});

exports.findWork = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const work = await Work.find({ userId: id });
  if (!work) {
    return next(res.send("Some Error Occured"));
  }
  res.status(200).json({
    success: true,
    work,
  });
});

exports.updateUserRatings = catchAsyncErrors(async (req, res, next) => {
  const { id, newRating } = req.body;
  const user = await Employee.findByIdAndUpdate(id, { ratings: newRating });

  if (!user) {
    return next(res.send("Some error occured"));
  }
  res.status(200).json({
    success: true,
    user,
  });
});

exports.removeEmployee = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.body;

  const user = await Employee.deleteOne({ _id: id });
  if (!user) {
    return next(res.send("Some error occured"));
  }
  await Work.deleteMany({ userId: id });
  const users = await Employee.find();
  res.status(200).json({
    success: true,
    users,
  });
});
