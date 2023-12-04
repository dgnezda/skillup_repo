import express from "express";
import { handleLogout } from "../controllers/logoutController.js";

export const router = express.Router();

router.get('/', handleLogout);
