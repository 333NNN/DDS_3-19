import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sobre from "./pages/Sobre";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />,
      },
    ],
  },
]);

export default router;
