// console.log("olá mundo");

// let nome = "NNN"

// console.log(`nn fff ${nome}`);

// console.log(process.argv);

// let argumentos = process.argv.slice(2);

// // console.log(argumentos);

// let alimento = argumentos[0].split("=");
// console.log(alimento);

const modulo_importado = require("./modulo_interno");

// console.log(modulo_importado);

modulo_importado.soma(3, 5);
modulo_importado.subtrair(3, 5);
modulo_importado.multiply(3, 5);
modulo_importado.division(3, 5);
