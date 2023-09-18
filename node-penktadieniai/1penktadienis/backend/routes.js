import express from "express";
import { getTodos } from "./controllers.js";

const router = express.Router();

router.get("/todo", getTodos);

router.post("");

export default router;
