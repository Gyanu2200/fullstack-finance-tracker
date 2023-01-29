import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    type: {
      type: "String",
      required: true,
    },
    name: {
      type: "String",
      required: true,
    },
    amount: {
      type: "String",
      required: true,
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
