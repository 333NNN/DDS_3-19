const minimist = require("minimist");

const soma = require("./soma").soma;
const argumentos = minimist(process.argv.slice(2));

console.log(argumentos);

const num = parseInt(argumentos["a"]);
const numm = parseInt(argumentos["b"]);

soma(num, numm);
