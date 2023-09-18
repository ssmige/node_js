import express from "express";
import { getNames, postNames } from "./controllers.js";

const router = express.Router();

router.get("/people", getNames);

router.post("/people", postNames);

export default router;
