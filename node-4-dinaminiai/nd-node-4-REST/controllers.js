import { data } from "./db.js";

export function test(req, res) {
  res.json({ message: "veikia" });
}

export function getData(req, res) {
  res.json(data);
}

export function filterByCarsBrand(req, res) {
  const car = req.params.car;
  const filteredByCars = data.filter((person) => person.car === car);
  return res.json(filteredByCars);
}

export function filterById(req, res) {
  const personId = parseInt(req.params.id);
  const filteredById = data.find((person) => person.id === personId);

  res.json(filteredById);
}

export function getEmails(req, res) {
  const emails = data.map((person) => person.email);
  res.json(emails);
}

export function getWomenList(req, res) {
  const womenList = data
    .filter((person) => person.gender === "Female")
    .map((person) => `${person.first_name} ${person.last_name}`);
  res.json(womenList);
}
