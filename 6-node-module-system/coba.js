function cetakNama(nama) {
  return `halo, saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "darul annas",
  umur: 27,
  cetakMhs() {
    return `halo, nama saya ${this.nama} dan umur saya ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

module.exports = { cetakNama, PI, mahasiswa, Orang };
