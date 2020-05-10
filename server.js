const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");

const cards = require("./routes/cards");
const app = express();

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(express.static("views"));
app.use(express.static(__dirname + "/views/js"));
app.use(express.static(__dirname + "/views/images"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "html");
app.set("view engine", "njk");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", cards);

const PORT = 8000;
app.listen(PORT, () =>
  console.log(`le serveur est lancé sur le port : ${PORT}`)
);
