const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

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
    helpText: "This is some helpful text",
    title: "HELP HELP ME HELP ME",
    name: "Sadness",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide an address",
    });
  }
  geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
    if(error){
      res.send({ error })
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        res.send({ error })
      }
      res.send({
        forecast: forecastData,
        address: req.query.address
      })
    })
  })
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must return a search term",
    });
  }
  res.send({
    products: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 help",
    name: "Otonye",
    errorMessage: "Help article not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Otonye",
    errorMessage: "Page not found",
  });
});

app.listen(7000, () => {
  console.log("APP IS LISTENING AT PORT 7000");
});
