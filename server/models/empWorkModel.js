const mongoose = require("mongoose");

const empWorkSchema = new mongoose.Schema({
  date: { required: true, type: String },
  projectName: { type: String, required: true },
  startDate: { required: true, type: String },
  endDate: { required: true, type: String },
  workingHours: { required: true, type: String },
  userId: { required: true, type: String },
  userName: { required: true, type: String },
});
module.exports = mongoose.model("Work", empWorkSchema);
