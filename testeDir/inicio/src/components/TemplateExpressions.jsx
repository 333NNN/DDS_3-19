import React from "react";

const TemplateExpressions = () => {
  

  let aluno = {
    nome: "",
    turma: "",
    curso: "",
  };
  aluno.nome = prompt("Insira seu nome: ");
  aluno.curso = prompt("Insira seu curso: ")
  aluno.turma = prompt("Insira sua turma: ");

  return (
    <div>
      <h1>Olá, {aluno.nome}</h1>
      <p>Seu curso é: {aluno.curso}</p>
      <p>Sua turma é: {aluno.turma}</p>
      
    </div>
  );
};

export default TemplateExpressions;
