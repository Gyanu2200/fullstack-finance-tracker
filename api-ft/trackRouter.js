import express from "express";
import { getUser, postUser } from "./user/modal/userModal.js";

export const router = express.Router();

router.get("/", async (req, res, next) => {
  //read

  const result = await getUser();

  res.json({
    status: "ok get",
    message: "Success",
    result,
  });
});
router.post("/", async (req, res, next) => {
  //create
  const data = req.body;
  const result = await postUser(data);
  console.log(result);
  res.json({
    status: "ok post",
    message: "Success",
  });
});
router.put("/", async (req, res, next) => {
  //update patch
  const data = req.body;
  const result = await updateUser(data);
  res.json({
    status: "ok put",
    message: "Success",
    result,
  });
});

//crud
