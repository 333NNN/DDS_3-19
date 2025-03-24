import { useState } from "react";
import "./App.css";
import ShowUserName from "./components/ShowUserName.jsx";
import Time from "./components/Time.jsx";

function App() {
  const nome = "Natã";
  const [name] = useState("Nate");

  return (
    <>
      {/*Render do component com props*/}
      <ShowUserName name={nome} shirt="black" />

      {/*props com desestruturação*/}
      <Time nome="Rio Branco" estado="ES" posicao={1}/>
    </>
  );
}

export default App;
