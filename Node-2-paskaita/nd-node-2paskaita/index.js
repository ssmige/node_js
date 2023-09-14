import express from "express";

const cars = ["BMW", "Audi", "Porsche"];

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json(cars);
});

app.listen(PORT, () => {
  console.log(`veikia adresu http://localhost:${PORT}`);
});
