const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

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

app.get("/about", (req, res) => {
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
