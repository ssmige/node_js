import express from "express";
import {
  createService,
  createUser,
  deleteServiceById,
  getService,
  getUsers,
  getUsersByOrderAsc,
  getUsersByOrderDesc,
} from "./controllers.js";

import { validateId } from "./middleware/index.js";

const router = express.Router();

router.get("/memberships", getService);

router.post("/memberships", createService);

router.delete("/memberships/:id", validateId, deleteServiceById);

router.post("/users", createUser);

router.get("/users", getUsers);

router.get("/users/:order", getUsersByOrderAsc);
router.get("/users/order/:desc", getUsersByOrderDesc);

export default router;
