import mongoose from "mongoose";

export const connectDB = () => {
  const mongoUrl = `mongodb://localhost:27017/finance-tracker`;
  const connect = new mongoose.connect(mongoUrl);

  connect ? console.log("mongo connected") : console.log("unable to connect");
};
