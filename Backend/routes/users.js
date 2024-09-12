import express from "express";
import {
  createUser,
  deleteUser,
  fetchAllUser,
  fetchUser,
  resetPass,
  updatePass,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

router.post("/", createUser);

router.patch("/pass_update", updatePass);

router.patch("/pass_reset/:id", resetPass);

router.patch("/:id", updateUser);

router.get("/", fetchAllUser);

router.get("/:id", fetchUser);

router.delete("/:id", deleteUser);

export default router;
