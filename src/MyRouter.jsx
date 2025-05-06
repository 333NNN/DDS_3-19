import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PaginaErro from "./pages/PaginaErro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastrarProdutos from "./pages/CadastrarProdutos";
import EditarProdutos from "./pages/EditarProdutos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastraproduto",
        element: <CadastrarProdutos />,
      },
      {
        path: "/editarproduto/:id",
        element: <EditarProdutos />,
      },
    ],
  },
]);

export default router;