const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("UP AND RUNNING");
});

app.get("/help", (req, res) => {
  res.send("HELP ME PLEASE");
});

app.listen(7000, () => {
  console.log("APP IS LISTENING AT PORT 7000");
});
