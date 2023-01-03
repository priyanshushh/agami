const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();
connectDatabase();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
