// Importação dos componentes do Bootstrap
import Col from "react-bootstrap/esm/Col";

// Importação dos componentes para criar a pagina
import Cadastro from "../components/Cadastro";
import Tabela from "../components/Tabela";
import Excluir from "../components/Excluir";
import Editar from "../components/Editar";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Home = () => {
  const [opcao, setOpcao] = useState(false);

  const handleOpcao = () => {
    setOpcao(!opcao);
  };
  return (
    <div className="d-flex flex-wrap text-center">
      <Col xs={6} style={{ backgroundColor: "#eee" }}>
        <Button variant="warning" className="mb-2 mt-2" onClick={handleOpcao}>
          {opcao ? "Quero Editar" : "Quero Cadastrar"}
        </Button>
        {opcao ? <Cadastro /> : <Editar />}

        <Excluir />
      </Col>
      <Col xs={6} style={{ backgroundColor: "#eef" }}>
        <Tabela />
      </Col>
    </div>
  );
};

export default Home;
