import React from "react";

function Events() {
  const teste = (e) => {
    console.log(e); // propriedades do evento que chamou a funcao
                    // alert("Clicou de novo com função externa")
  };
  return (
    <div>
      <button
        onClick={() => {
          console.log("Primeiro botão testado");
        }} /*Event onClick chamando funcao anonima dinamica*/
      >
        clica aqui
      </button>
      <button onClick={teste}>clica ali</button>
    </div>
  );
}

export default Events;
