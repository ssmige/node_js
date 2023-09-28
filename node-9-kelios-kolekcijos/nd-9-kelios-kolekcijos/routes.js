import express from "express";
import { createCategory, createProduct } from "./controllers.js";

const router = express.Router();

router.post("/product", createProduct);

router.post("/category", createCategory);

router.get("/product");

router.get("/categoryValue");

export default router;
