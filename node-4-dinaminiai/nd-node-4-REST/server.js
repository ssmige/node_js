import express from "express";
import routers from "./routers.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(routers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
