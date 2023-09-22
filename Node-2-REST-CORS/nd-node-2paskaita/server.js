import express from "express";
import cors from "cors";

const carBrand = ["BMW", "VW", "Porsche"];

const PORT = 3000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(carBrand);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
