import express from "express";
import router from "./routes.js";

const PORT = 3000;

const app = express();
app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
