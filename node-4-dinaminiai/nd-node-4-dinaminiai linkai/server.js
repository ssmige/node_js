import express from "express";
import cors from "cors";
import router from "./routes.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
