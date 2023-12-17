// const validator = require("validator");
const chalk = require("chalk");
// import chalk from "chalk";

// console.log(validator.isEmail("darul@gmail.com"));
// console.log(validator.isMobilePhone("+6287883096699", "id-ID"));
// console.log(validator.isNumeric("a+6287883096699"));

console.log(chalk.blue("hello world"));
const nama = "darul";
const pesan = chalk`lorema dwai{bgRed dhwa}oi awjdwudb. nama saya : ${nama}`;
console.log(chalk.bgBlue.black(pesan));
