const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// third-party middleware
app.use(expressLayouts);

// built-in middleware
app.use(express.static("public"));

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
  const contacts = loadContact();
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Halaman Contact",
    contacts,
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Halaman Detail Contact",
    contact,
  });
});

app.use("/", (req, res) => {
  res.status("404");
  res.send("<h1>404</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
