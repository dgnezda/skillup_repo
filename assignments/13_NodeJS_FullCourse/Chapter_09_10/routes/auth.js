import express from "express";
import { handleLogin } from "../controllers/authController.js";

export const router = express.Router();

router.post('/', handleLogin);
