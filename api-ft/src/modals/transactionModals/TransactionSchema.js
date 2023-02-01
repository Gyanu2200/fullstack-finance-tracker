import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    transName: {
      type: String,
      required: true,
    },
    transAmount: {
      type: String,
      required: true,
      min: 1,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("financeTransaction", transactionSchema);
