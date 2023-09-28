import express from "express";
import {
  createService,
  createUser,
  deleteServiceById,
  getService,
} from "./controllers.js";
import { validateId } from "./middleware/index.js";

const router = express.Router();

router.get("/memberships", getService);

router.post("/memberships", createService);

router.delete("/memberships/:id", validateId, deleteServiceById);

router.post("/users", createUser);

router.get("/users/:order");

export default router;
