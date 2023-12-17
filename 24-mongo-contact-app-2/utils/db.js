const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/darul");

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: "Mirza Annas",
//   nohp: "0812349028",
//   email: "mirza@gmail.com",
// });

// // Simpan ke collections
// contact1.save().then((contact) => console.log(contact));
