import express from "express";
import {
  addNewPet,
  getPets,
  getPetByType,
  getPetByOldest,
} from "./controllers.js";

const router = express.Router();

router.post("/pets", addNewPet);

router.get("/pets", getPets);

router.get("/pets/:type", getPetByType);

router.get("/pets/:byOldest", getPetByOldest);

export default router;
