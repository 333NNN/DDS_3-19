const fs = require("fs");

// console.log(fs);

// fs.readFile("teste.txt", "utf-8", (erro, dados)=> {
//     if(erro){
//         console.log(erro);
//     } else {
//         console.log(dados);
//     }
// })

// const mensagem = "Não sei o que estou fazendo de minha vida";

// fs.writeFile("teste2.txt", mensagem, "utf-8", () => {});

const mensagem2 = "Outra mensagem";

fs.appendFile("teste2.txt", mensagem2, "utf-8", (erro) => {
  if (erro) {
    console.log("Deu errado parça");
  } else {
    console.log("Texto adicionado com sucesso");
  }
});


