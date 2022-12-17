import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      //   required: true,
    },
    password: {
      type: Number,
      //   required: true,
    },
    email: {
      type: String,
      //   required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("finance-table", userSchema);
