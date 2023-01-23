import mongoose from "mongoose";

export const dbconnect = () => {
  try {
    const dbUrl = "mongodb://localhost:27017/fullstack-ft";
    mongoose.set("strictQuery", true); // to supress the error message in console
    const conn = mongoose.connect(dbUrl);
    conn && console.log("mongoDB connected");
  } catch (error) {
    console.log(error.message, "from mongoDB function");
  }
};
