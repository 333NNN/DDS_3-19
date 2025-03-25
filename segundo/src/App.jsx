import { useState } from "react";
import "./App.css";
import ShowUserName from "./components/ShowUserName.jsx";
import Time from "./components/Time.jsx";
import Cantores from "./components/Cantores.jsx";

function App() {
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

      {cantores.map((cantor) => (
        <Cantores
          key={cantor.id}
          name={cantor.name}
          estiloMusical={cantor.estiloMusical}
          premiado={cantor.premiado}
        />
      ))}
    </>
  );
}

export default App;
