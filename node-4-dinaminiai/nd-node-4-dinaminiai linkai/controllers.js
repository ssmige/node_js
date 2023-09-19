import { cars } from "./db.js";
// const cars = {
//   bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
//   mb: ["A class", "C class", "E class", "S class"],
//   vw: ["Golf", "Arteon", "UP"],
// };
export function test(req, res) {
  res.json({ message: "veikia" });
}

export function getCars(req, res) {
  res.json(cars);
}

export function getBrand(req, res) {
  const brand = req.params.brand.toLowerCase();

  res.json(cars[brand]);
}
