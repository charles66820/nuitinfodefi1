
const express = require("express");
const fs = require("fs");

if (process.env.ENV == "dev") {

}

// app settings
const app = express();
global.port = process.env.PORT || 8080;
global.hostname = process.env.HOSTNAME || "localhost";

app.use(express.static(__dirname + "/public"));

// Routes
app.get("/", function (req, res) {
  fs.readFile('templates/main.html', (err, data) => {
    res.end(data);
  });
});

app.get("/3D/*", function (req, res) {
  fs.readFile('templates/3D.html', (err, data) => {
    res.end(data);
  });
});

app.get("/O-T/*", function (req, res) {
  fs.readFile('templates/OT.html', (err, data) => {
    res.end(data);
  });
});

app.get("/gif/*", function (req, res) {
  fs.readFile('templates/gif.html', (err, data) => {
    res.end(data);
  });
});

app.get("/ConstruitTonProjet/*", function (req, res) {
  fs.readFile('templates/ConstruitTonProjet.html', (err, data) => {
    res.end(data);
  });
});

app.get("/api/*", function (req, res) {
  res.status(200).json({
    msg: "api"
  });
});

app.all('*', (req, res) => {
  res.redirect("/404/");
});

app.listen(port, () => {
  console.log("Backend run on " + process.env.ENV + " env and accessible on http://" + hostname + ":" + port);
});

process.on('exit', () => console.log("Backend stop"));
