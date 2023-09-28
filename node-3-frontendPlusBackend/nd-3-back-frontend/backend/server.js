import express from "express";
import cors from "cors";
import routes from "./routes.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
