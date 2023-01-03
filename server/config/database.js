const mongoose = require("mongoose");
// const link = "mongodb://localhost:27017/agami";

const connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_DB_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
