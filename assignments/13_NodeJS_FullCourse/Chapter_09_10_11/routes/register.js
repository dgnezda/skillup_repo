import express from "express";
import { handleNewUser } from "../controllers/registerController.js";

export const router = express.Router();

router.post('/', handleNewUser);
