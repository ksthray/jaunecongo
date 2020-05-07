const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");

const cards = require("./routes/cards");
const app = express();

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(express.static("views"));
app.use(express.static(__dirname + "/views/js"));

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "html");
app.set("view engine", "njk");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", cards);

app.listen(8000);
