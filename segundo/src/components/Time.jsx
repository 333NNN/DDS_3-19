import React from "react";

const Time = ({ nome, estado, posicao, campeao }) => {
  return (
    <div>
      <h1>Nome do time: {nome}</h1>
      <h2>Estado do Time: {estado}</h2>
      <h2>Posição: {posicao}</h2>
      {(campeao && <h3>Este time é Campeão</h3>)||(<h3>Este time não é Campeão</h3>)}
    </div>
  );
};

export default Time;
