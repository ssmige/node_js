import { people } from "./db.js";

export function getNames(req, res) {
  res.json(people);
}

export function postNames(req, res) {
  const name = req.body.name;

  people.push(name);
  res.json(people);
}
