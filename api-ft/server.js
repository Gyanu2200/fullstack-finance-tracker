import express from "express";

const app = express();

const PORT = process.env.PORT || 8000; //process.env.PORT is to get dynamic PORT from hosting server and our local server is 8000

import morgan from "morgan";
import cors from "cors";

//Routers
import userRouter from "./src/routers/userRouter.js";
//user Router to handle user registration and login
app.use("/api/v1/user", userRouter);

//connect MongoDB
import { connectMongoDB } from "./src/config/dbConfig.js";
connectMongoDB();

//middlewares: we use them to allow different server
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//Routers (one router refer to one table)
// user Router to handle user registration and login
// transaction router to handle all transaction related CRUD operation

// uncaught router  request: means if we have not created any router and if we get request that will be handle as below:
//basically we get wrong url, it will be handled as below:
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "Requested resouces not found",
  };
  next(error);
});

//global error handling
app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;

    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is running at http://localhost:${PORT}`);
});
