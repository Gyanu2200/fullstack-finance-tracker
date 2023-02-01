import express from "express";
import {
  createTransaction,
  deleteManyTransaction,
  getTransaction,
} from "../../modals/transactionModals/TransactionModal.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const result = await createTransaction({
      ...req.body,
      userId: authorization,
    });
    result?._id
      ? res.json({
          status: "success",
          message: "transaction is created successfully",
        })
      : res.json({
          status: "error",
          message: "cannot create transaction",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const result = await getTransaction({ userId: authorization });
    res.json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const result = await deleteManyTransaction(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "delete method to do",
    });
  } catch (error) {
    next(error);
  }
});
export default router;
