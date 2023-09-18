import { todos } from "./db.js";

export function getTodos(req, res) {
  res.json(todos);
}
