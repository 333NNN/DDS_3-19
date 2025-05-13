import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const CadastrarProdutos = () => {
  const { usuarioNome } = useContext(AuthContext);
  if (usuarioNome === "Visitante") return <Navigate to="/login" />;

  return <div>CadastrarProdutos</div>;
};

export default CadastrarProdutos;
