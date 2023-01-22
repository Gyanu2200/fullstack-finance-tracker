import express from "express";

const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("Got hit to all router");
  next();
});

//creating new user

router.post("/", (req, res, next) => {
  try {
    console.log(req.body);
    res.json({
      status: "success",
      message: "TO Insert user",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
