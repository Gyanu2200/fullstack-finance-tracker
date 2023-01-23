import express from "express";
import { createUser } from "../modals/userModals/userModal.js";

const router = express.Router();

//hit all method
router.all("/", (req, res, next) => {
  console.log("Got hit to all router");
  next();
});

//creating user profile
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await createUser(req.body);

    res.json({
      status: "success",
      message: "To Insert User",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
