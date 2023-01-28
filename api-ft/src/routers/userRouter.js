import express from "express";
import { createUser, getSingleUser } from "../modals/userModals/userModal.js";

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

    result?._id
      ? res.json({
          status: "success",
          message: "To Insert User",
        })
      : res.json({
          status: "error",
          message: "unable to create user",
        });
  } catch (error) {
    console.log(error.message);
    error.code = 500;
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.message =
        "There is already another user exist with the same email, please rest passoword to use or use different email to register";
      error.errorCode = 200;
    }
    next(error);
  }
});

//getting user profile
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await getSingleUser(req.body);
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "login successful",
          result: {
            _id: result._id,
            name: result.name,
            email: result.email,
          },
        })
      : res.json({
          status: "error",
          message: "login not successful",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
