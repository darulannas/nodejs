const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// third-party middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// built-in middleware
app.use(express.static("public"));

// application level middleware
app.use((req, res, next) => {
  console.log("time", Date.now());
  next();
});

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "darul",
      email: "darul@gmail.com",
    },
    {
      nama: "annas",
      email: "annas@gmail.com",
    },
    {
      nama: "septihan",
      email: "septihan@gmail.com",
    },
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "darul annas",
    title: "Halaman Home",
    mahasiswa,
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Halaman About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(`Product ID :  ${req.params.id} <br> Category ID : ${req.query.category}`);
});

app.use("/", (req, res) => {
  res.status("404");
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
