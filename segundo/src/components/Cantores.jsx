import React from "react";

const Cantores = (props) => {
  return (
    <div>
      <h2>Nome do cantor: {props.name}</h2>
      <h2>Estilo musical: {props.estiloMusical}</h2>
      {(props.premiado && <h3>Este cantor(a) é premiado(a)</h3>) || (
        <h3>Este cantor(a) não é premiado(a)</h3>
      )}
      <hr />
    </div>
  );
};

export default Cantores;
