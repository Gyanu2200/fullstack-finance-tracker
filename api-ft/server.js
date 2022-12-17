import express from "express";
import { connectDB } from "./config.js";
import { router } from "./trackRouter.js";

const PORT = 8000;
const app = express();
connectDB();
app.use(express.json());
app.use("/track", router);

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`your server is running at http://localhost:8000`);
});
