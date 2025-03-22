import React from "react";
import { useState } from "react";

const Varia = () => {
  //variaveis padrão JS
  let algo = 10;
  console.log(algo);

  //variaveis usando hook useState

  const [number, setNumber] = useState(7);
  console.log("Minha variável number: ", number);
  return (
    <div>
      <p>Variavel: {algo}</p>
      <button
        onClick={() => {
          algo = 20;
          console.log("Novo valor de algo:", algo);
        }}
      >
        Alterar
      </button>
      <hr />
      <p>Valor da variável number: {number}</p>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Aumentar
      </button>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        Diminuir
      </button>

      <button
        onClick={() => {
          setNumber(number - number);
        }}
      >
        Resetar
      </button>
    </div>
  );
};

export default Varia;
