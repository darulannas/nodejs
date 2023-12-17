// const nama = "Darul Annas";
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require("fs"); // core module
// const cetakNama = require("./coba"); // local module
// const moment = require("moment"); // third party module atau npm module didalam folder node_modules
const coba = require("./coba");

console.log(coba.cetakNama("darul annas"), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
