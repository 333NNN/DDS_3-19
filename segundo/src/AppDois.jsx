import { useState } from "react";
import "./App.css";
import ShowUserName from "./components/ShowUserName.jsx";
import Time from "./components/Time.jsx";
import Cantores from "./components/Cantores.jsx";

function AppDois() {
  const nnn = 10;
  const titulo = true;

  const nome = "Natã";
  const [name] = useState("Nate");

  const [cantores] = useState([
    { id: 1, name: "Lady Gaga", estiloMusical: "Pop", premiado: true },
    { id: 2, name: "Michael Jackson", estiloMusical: "R&B", premiado: true },
    { id: 3, name: "Oruam", estiloMusical: "Trap", premiado: false },
  ]);

  return (
    <>
      {/*Render do component com props*/}
      {/* <ShowUserName name={nome} shirt="black" /> */}
      <hr />
      {/*props com desestruturação*/}
      {/* <Time nome="Rio Branco" estado="ES" posicao={1} campeao={true} />
      <hr />
      <Time nome="St Pauli" estado="Hamburgo" posicao={15} campeao={false} />
      <hr />
      <Time nome="Vasco de Gama" estado="RJ" posicao={0} campeao={false} /> */}

      {/*renderização de lista e passagem de props p/ components*/}
      {/* {cantores.map((cantor) => (
        <Cantores
          key={cantor.id}
          name={cantor.name}
          estiloMusical={cantor.estiloMusical}
          premiado={cantor.premiado}
        />
      ))} */}

      <h2
        style={
          nnn > 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30px" }
            : { color: "red", backgroundColor: "blue", fontSize: "30px" }
        }
      >
        ESTE É UM CSS É DINÂMICO
      </h2>
      <h2
        style={
          nnn < 5
            ? { color: "green", backgroundColor: "yellow", fontSize: "30px" }
            : { color: "red", backgroundColor: "blue", fontSize: "30px" }
        }
      >
        ESTE CSS TAMBÉM É DINÂMICO
      </h2>

      <h1 className={titulo ? "titulo-incrivel" : "texto-paia"}>
        Título incrível para teste
      </h1>
    </>
  );
}

export default AppDois;
