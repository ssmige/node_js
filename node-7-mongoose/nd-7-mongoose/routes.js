// 1. Susikuriame naują duomenų bazę per MongoDB Compass, o joje kolekciją pavadinimu "people".
// 2. Sukuriame Express projektą, kuriame įsidiegiame visus reikiamus įrankius (įskaitant ESLint ir dotenv).
// 3. Sukuriame GET route, kuris paduos visus duomenis iš "people" kolekcijos.
// 4. Sukuriame POST route, kuris gautus duomenis įrašys į kolekciją.

// Kolekcijoje "people" dokumentas turės: vardą, pavardę ir amžių.

import express from "express";
import { addNewAsmuo, getAsmuo } from "./controllers.js";

const router = express.Router();

router.post("/asmuo", addNewAsmuo);
router.get("/asmuo", getAsmuo);

export default router;
