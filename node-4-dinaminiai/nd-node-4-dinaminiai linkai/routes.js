import express from "express";
import { test, getCars, getBrand } from "./controllers.js";

const router = express.Router();

router.get("/cars", getCars);

router.get("/cars/:brand", getBrand);

export default router;
