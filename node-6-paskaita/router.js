import express from "express";
import { addNewPerson, addNewCar } from "./controllers.js";

const router = express.Router();

// router.post("/", addNewPerson);

router.post("/", addNewCar);

export default router;
