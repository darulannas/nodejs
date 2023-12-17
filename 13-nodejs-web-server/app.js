// const http = require("http");
// const fs = require("fs");

// const port = 3000;

// const renderHTML = (path, res) => {
//   fs.readFile(path, (e, data) => {
//     if (e) {
//       res.writeHead(404);
//       res.write("Error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "content-type": "text/html",
//     });

//     const url = req.url;
//     if (url === "/about") {
//       //   res.write("<h1>hello world about</h1>");
//       //   res.end();
//       renderHTML("./about.html", res);
//     } else if (url === "/contact") {
//       renderHTML("./contact.html", res);
//     } else {
//       //   res.write("hello world");
//       renderHTML("./index.html", res);
//     }

//     // switch (url) {
//     //   case "./about":
//     //     renderHTML("./about.html", res);
//     //     break;
//     //   case "./contact":
//     //     renderHTML("./contact.html", res);
//     //     break;
//     //   default:
//     //     renderHTML("./index.html", res);
//     //     break;
//     // }
//   })
//   .listen(port, () => {
//     console.log(`server is listening on port ${port}`);
//   });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  //
  // res.json({
  //   nama: "darul annas",
  //   email: "darul@gmail.com",
  //   noHP: "08123123123",
  // });
  //
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("Ini adalah halaman About");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  // res.send("Ini adalah halaman Contact");
  res.sendFile("./contact.html", { root: __dirname });
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
