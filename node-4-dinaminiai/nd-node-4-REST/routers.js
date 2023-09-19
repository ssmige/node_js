import express from "express";
import {
  test,
  getData,
  filterByCarsBrand,
  filterById,
  getEmails,
  getWomenList,
} from "./controllers.js";

const router = express.Router();

router.get("/", test);

router.get("/data", getData);

router.get("/data/:car", filterByCarsBrand);

router.get("/data/person/:id", filterById);

router.get("/emails", getEmails);

router.get("/women", getWomenList);

export default router;
