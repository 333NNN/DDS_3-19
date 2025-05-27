const minimist = require("minimist");

const fs = require("fs");

const moduloSoma = require("../modulo_interno");

const args = minimist(process.argv.slice(2));

const funcSoma = moduloSoma.soma;

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

const resultado = funcSoma(a, b);

fs.writeFile("resultadoSoma.txt", resultado.toString(), "utf-8", (erro, dados) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log(dados);
  }
});
