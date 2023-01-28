import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT || 8000;

//mongoDB connection
import { dbconnect } from "./src/dbConfig/dbConfig.js";
dbconnect();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// router
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter);

// const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// uncaught router request
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "Requested resource not found",
  };
  next(error);
});
// global error handling
app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Your server is running at http://localhost:${PORT}`);
});
