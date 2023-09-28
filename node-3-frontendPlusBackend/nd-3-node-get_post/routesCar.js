import express from "express";
import { carsData } from "./dbCars.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(carsData);
});

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);

  res.json(body);
});

export default router;
