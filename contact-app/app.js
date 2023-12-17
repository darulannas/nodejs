const yargs = require("yargs");
const { simpanContact, listContact, detailContact, deleteContact } = require("./contacts");

console.log(yargs.argv);

yargs
  .command({
    command: "add",
    describe: "menambahkan contact baru",
    builder: {
      nama: {
        describe: "nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "no HP",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama & no hp contact
yargs.command({
  command: "list",
  describe: "menampilkan semua nama dan no hp contact",
  handler() {
    listContact();
  },
});

// menampilkan detail sebuah contact
yargs.command({
  command: "detail",
  describe: "menampilkan detail sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "menghapus sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();

// const { tulisPertanyaan, simpanContact } = require("./contacts");

// const main = async () => {
//   const nama = await tulisPertanyaan("Masukan nama anda : ");
//   const email = await tulisPertanyaan("Masukan email anda : ");
//   const noHP = await tulisPertanyaan("Masukan no hp anda : ");

//   simpanContact(nama, email, noHP);
// };

// main();
