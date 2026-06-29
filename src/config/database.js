import config from "./config.js";

import mongoose from "mongoose";

async function connectDB() {
  await mongoose
    .connect(config.MONGO_URI)
    .then((res) => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("error in connencting with the database");
    });
}
//moving to the next phase of project
export default connectDB;
