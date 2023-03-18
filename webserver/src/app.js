const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Otonye",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Otonye",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "HELP HELP ME HELP ME",
    name: "Sadness",
  });
});

app.listen(7000, () => {
  console.log("APP IS LISTENING AT PORT 7000");
});
