import express from "express";

const app = express();
app.get("/test", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
});
