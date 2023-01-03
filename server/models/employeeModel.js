const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "employee" },
  managerId: { type: String, default: "none" },
  managerTeam: [{ memberId: { type: String }, memberName: { type: String } }],
  ratings: { type: Number, default: 0 },
});
module.exports = mongoose.model("Employee", employeeSchema);
