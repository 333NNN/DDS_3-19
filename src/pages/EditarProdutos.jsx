import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const EditarProdutos = () => {
  const { usuarioNome } = useContext(AuthContext);
  if (usuarioNome === "Visitante") return <Navigate to="/login" />;
  return <div>EditarProdutos</div>;
};

export default EditarProdutos;
