import express from "express";
import { handleRefreshToken } from "../controllers/refreshTokenController.js";

export const router = express.Router();

router.get('/', handleRefreshToken);
