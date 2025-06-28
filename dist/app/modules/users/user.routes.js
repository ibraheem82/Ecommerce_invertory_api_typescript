import express from "express";
import { UserController } from "./user.controller.js";
const router = express.Router();
router.post("/create-account", UserController.registerUser);
router.post("/login", UserController.loginUser);
export const UserRoutes = router;
